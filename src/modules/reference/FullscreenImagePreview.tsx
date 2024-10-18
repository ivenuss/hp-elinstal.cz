import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "icons";

interface FullscreenImagePreviewProps {
  images: string[];
  index: number | null;
  onIndexChange: (i: number) => void;
  onRequestClose: () => void;
}

export const FullscreenImagePreview: React.FC<FullscreenImagePreviewProps> = ({
  images,
  index,
  onIndexChange,

  onRequestClose,
}) => {
  const arrowButtonClass =
    "absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-3.5 md:p-2 rounded-full z-20";
  const arrowClass = "text-white text-xl select-none z-30";

  if (index === null) return null;

  const handlePrev = () =>
    onIndexChange(index === 0 ? images.length - 1 : index - 1);
  const handleNext = () =>
    onIndexChange(index === images.length - 1 ? 0 : index + 1);

  // Exit on ESC key
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      // ESC
      if (e.keyCode === 27) onRequestClose();
      // ArrowLeft
      else if (e.keyCode === 37) handlePrev();
      // ArrowRight
      else if (e.keyCode === 39) handleNext();
    };

    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [index]);

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-20 bg-opacity-100 md:bg-opacity-90 bg-black">
      <div className="relative mx-auto h-screen">
        {images[index] && (
          <Image
            src={images[index]}
            priority={false}
            alt="Image"
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>

      <button
        onClick={onRequestClose}
        className="absolute top-3 left-3 rounded-full bg-black bg-opacity-30 p-3.5 md:p-2 rounded- z-20 text-white"
      >
        <CloseIcon className="text-xl text-white" />
      </button>

      <button onClick={handlePrev} className={`${arrowButtonClass} left-3`}>
        <ArrowLeftIcon className={arrowClass} />
      </button>

      <button onClick={handleNext} className={`${arrowButtonClass} right-3`}>
        <ArrowRightIcon className={arrowClass} />
      </button>
    </div>
  );
};
