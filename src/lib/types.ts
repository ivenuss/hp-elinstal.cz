export type Photo = {
  id: string;
  description: string;
  productUrl: string;
  baseUrl: string;
  mimeType: string;
  mediaMetadata: PhotoMediaMetadata;
  filename: string;
};

export type PhotoMediaMetadata = {
  creationTime: Date;
  width: string;
  height: string;
  photo: Object;
};

export type ReferencePhotos = {
  error?: string;
  photos?: Photo[];
  parameters: {
    albumId: string;
    pageSize: number;
  };
};
