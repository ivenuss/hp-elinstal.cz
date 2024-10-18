import { removeScroll as removeScrollFn } from "@/utils/removeScroll";

export const removeScroll = () => {
  const unsubscribe = removeScrollFn();

  return {
    destroy() {
      unsubscribe();
    },
  };
};
