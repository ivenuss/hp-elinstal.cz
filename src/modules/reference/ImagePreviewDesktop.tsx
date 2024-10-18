import React, { useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import Image from "next/image";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "../../icons/index";
import { Photo } from "lib/types";

interface ImagePreviewProps {
  index: null | number;
  onIndexChange: (i: null | number) => void;
  images: Photo[];
}

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

const ImagePreviewerDesktop: React.FC<ImagePreviewProps> = ({
  images,
  index,
  onIndexChange,
}) => {
  // Exit on ESC key
  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.keyCode === 27) onIndexChange(null);
    };

    document.addEventListener("keydown", handleEsc, false);
    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  }, []);

  if (index === null) return null;

  function slideRenderer(params: any) {
    const { index: i, key } = params;

    return (
      <div key={key}>
        <div className="relative w-screen h-screen grid place-items-center">
          {images[i] && (
            <Image
              src={`${images[i].baseUrl}=w${images[i].mediaMetadata.width}-h${images[i].mediaMetadata.height}`}
              alt="Image"
              layout="fill"
              objectFit="contain"
            />
          )}
        </div>
      </div>
    );
  }

  const arrowButtonClass =
    "absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full z-20";
  const arrowClass = "text-white text-xl select-none z-30";

  const hasPrevPage = index > 0;
  const hasNextPage = index < images.length - 1;

  const setPage = (i: number) => {
    if (i < 0 || images.length <= i) return;
    onIndexChange(i);
  };

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 z-20 bg-black" />

      <div className="fixed top-0 left-0 bottom-0 right-0 z-50">
        <button
          onClick={() => onIndexChange(null)}
          className="absolute top-3 left-3 rounded-full bg-black bg-opacity-30 p-2 rounded- z-20"
        >
          <CloseIcon className="text-xl text-white" />
        </button>
        <VirtualizeSwipeableViews
          index={index}
          disabled={true}
          onChangeIndex={setPage}
          slideRenderer={slideRenderer}
        />

        {hasPrevPage && (
          <button
            onClick={() => setPage(index - 1)}
            className={`${arrowButtonClass} left-3`}
          >
            <ArrowLeftIcon className={`${arrowClass}`} />
          </button>
        )}

        {hasNextPage && (
          <button
            onClick={() => setPage(index + 1)}
            className={`${arrowButtonClass} right-3`}
          >
            <ArrowRightIcon className={`${arrowClass} `} />
          </button>
        )}

        {images[index]?.description && (
          <div className="absolute bottom-0 left-0 m-6 mt-2 p-3 rounded-2xl bg-black bg-opacity-60 font-medium text-white">
            {images[index].description}
          </div>
        )}
      </div>
    </>
  );
};

export default ImagePreviewerDesktop;
