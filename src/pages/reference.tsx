import Container from "../ui/Container";
import Image from "next/image";
import Gallery from "react-photo-gallery";
import InfiniteScroll from "react-infinite-scroll-component";
import ImagePreviewerDesktop from "modules/reference/ImagePreviewDesktop";
import { useCallback, useState } from "react";
import { PreviewImage } from "modules/reference/PreviewImage";
import type { GetServerSideProps, NextPage } from "next";
import type { ReferencePhotos } from "lib/types";

const ImagePreview = ({ url, onView }: any) => {
  return (
    <button
      onClick={onView}
      className="relative aspect-square overflow-hidden bg-primary-light-200"
    >
      <Image layout="fill" objectFit="cover" src={url} />
    </button>
  );
};

interface ReferenceProps {
  data: ReferencePhotos;
}

const ITEMS_PER_PAGE = 50;

const Reference: NextPage<ReferenceProps> = ({ data }) => {
  const ph = data.photos;

  const [index, setIndex] = useState<null | number>(null);

  const galleryPhotos = ph?.map((photo) => ({
    src: photo.baseUrl,
    key: photo.id,
    width: Number(photo.mediaMetadata.width),
    height: Number(photo.mediaMetadata.height),
    alt: photo.description,
  }));

  const [photos, setPhotos] = useState(
    galleryPhotos ? galleryPhotos.slice(0, ITEMS_PER_PAGE) : []
  );

  const hasMore = photos.length != ph?.length;

  const showMore = () => {
    setPhotos([
      ...photos,
      ...(galleryPhotos
        ? galleryPhotos.slice(photos.length, photos.length + ITEMS_PER_PAGE)
        : []),
    ]);
  };

  const imageRenderer = useCallback(
    ({ index: i, left, top, key, photo }: any) => (
      <PreviewImage
        key={key}
        index={i}
        photo={photo}
        onOpen={() => {
          setIndex(i);
        }}
      />
    ),
    []
  );

  return (
    <Container
      title="Reference"
      desc="Reference"
      headerImage="/static/images/header_example.png"
    >
      <div className="text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Naše realizace</h2>
        <div className="text-primary-light-400">
          Ukázka našich prací, které jsme dělali nebo jsme se podíleli na jejich
          realizaci.
        </div>
      </div>

      {photos && (
        <div className="mt-8 mb-16">
          <InfiniteScroll
            dataLength={photos.length}
            next={showMore}
            hasMore={hasMore}
            loader={null}
          >
            <Gallery photos={photos} renderImage={imageRenderer} />
          </InfiniteScroll>
        </div>
      )}

      {ph && (
        <ImagePreviewerDesktop
          images={ph}
          index={index}
          onIndexChange={(i) => setIndex(i)}
        />
      )}
    </Container>
  );
};

export default Reference;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const photos = await fetch(`${process.env.SITE_URL}/api/google/photos`).then(
    (res) => res.json()
  );
  return { props: { data: photos } };
};
