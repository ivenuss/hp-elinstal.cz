import Image from "next/image";
import React from "react";
import { InfoIcon } from "icons";

interface PreviewImageProps {
  index: string;
  photo: {
    src: string;
    srcSet?: string | string[] | undefined;
    sizes?: string | string[] | undefined;
    width: number;
    height: number;
    alt?: string | undefined;
    key?: string | undefined;
  };
  onOpen: () => void;
}

export const PreviewImage: React.FC<PreviewImageProps> = ({
  index,
  photo,
  onOpen,
}: any) => {
  return (
    <div
      className="relative m-0.5 cursor-pointer"
      style={{ height: photo.height, width: photo.width }}
      onClick={onOpen}
    >
      <Image
        layout="responsive"
        className="bg-primary-light-200"
        alt={photo.alt || null}
        {...photo}
      />

      {photo.alt && (
        <div className="flex items-center absolute bottom-0 left-0 m-2.5 pr-3 py-1 rounded-md text-primary-light-200 text-sm bg-black bg-opacity-70">
          <InfoIcon className="flex-none text-xl ml-2 mr-1 text-white" />{" "}
          <span>{photo.alt}</span>
        </div>
      )}
    </div>
  );
};
