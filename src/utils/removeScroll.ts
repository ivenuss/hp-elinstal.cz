// Modified from @zag-js/remove-scroll v0.10.2 (2023-06-10)
// Source: https://github.com/chakra-ui/zag
// https://github.com/chakra-ui/zag/blob/main/packages/utilities/remove-scroll/src/index.ts

export function noop() {
  //
}

const isDom = () => typeof window !== "undefined";
const getPlatform = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const agent = (navigator as any).userAgentData;
  return (agent?.platform ?? navigator.platform) as string;
};
const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
const pt = (v: RegExp) => isDom() && v.test(getPlatform().toLowerCase());
const isMac = () => pt(/^mac/) && !isTouchDevice();
export const isApple = () => pt(/mac|iphone|ipad|ipod/i);
export const isIos = () => isApple() && !isMac();

const LOCK_CLASSNAME = "data-scroll-lock";

const assignStyle = (
  el: HTMLElement | null | undefined,
  style: Partial<CSSStyleDeclaration>,
) => {
  if (!el) return;
  const previousStyle = el.style.cssText;
  Object.assign(el.style, style);
  return () => {
    el.style.cssText = previousStyle;
  };
};

const setCSSProperty = (
  el: HTMLElement | null | undefined,
  property: string,
  value: string,
) => {
  if (!el) return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
    }
  };
};

const getPaddingProperty = (documentElement: HTMLElement) => {
  // RTL <body> scrollbar
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
};

export const removeScroll = (_document?: Document): (() => void) => {
  const doc = _document ?? document;
  const win = doc.defaultView ?? window;

  const { documentElement, body } = doc;

  const locked = body.hasAttribute(LOCK_CLASSNAME);
  if (locked) return noop;

  body.setAttribute(LOCK_CLASSNAME, "");

  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = () =>
    setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty(documentElement);
  const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];

  const setStyle = () =>
    assignStyle(body, {
      overflow: "hidden",
      [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`,
    });

  // Only iOS doesn't respect `overflow: hidden` on document.body
  const setIOSStyle = () => {
    const { scrollX, scrollY, visualViewport } = win;

    // iOS 12 does not support `visuaViewport`.
    const offsetLeft = visualViewport?.offsetLeft ?? 0;
    const offsetTop = visualViewport?.offsetTop ?? 0;

    const restoreStyle = assignStyle(body, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: "0",
      [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`,
    });

    return () => {
      restoreStyle?.();
      win.scrollTo(scrollX, scrollY);
    };
  };

  const cleanups = [
    setScrollbarWidthProperty(),
    isIos() ? setIOSStyle() : setStyle(),
  ];

  return () => {
    cleanups.forEach((fn) => fn?.());
    body.removeAttribute(LOCK_CLASSNAME);
  };
};
