const Photos = require("googlephotos");
import { google } from "googleapis";

export const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_OAUTH_CALLBACK
);

export const refreshToken = async (): Promise<{
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}> => {
  return fetch("https://accounts.google.com/o/oauth2/token", {
    method: "POST",
    body: JSON.stringify({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  }).then((res) => res.json());
};

export const getAuthUrl = () => {
  return oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "online",

    // If you only need one scope you can pass it as a string
    scope: [Photos.Scopes.READ_AND_APPEND],
  });
};

export const libraryApiSearch = async (
  authToken: any,
  parameters: {
    albumId: string;
    pageSize: number;
    pageToken?: string;
  }
) => {
  let photos = [] as any;
  let nextPageToken = null;
  let error = null;

  parameters.pageSize = 100;

  try {
    // Loop while the number of photos threshold has not been met yet
    // and while there is a nextPageToken to load more items.
    do {
      // Make a POST request to search the library or album
      const searchResponse = await fetch(
        "https://photoslibrary.googleapis.com" + "/v1/mediaItems:search",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authToken,
          },
          body: JSON.stringify(parameters),
        }
      );

      const result = await searchResponse.json();

      // The list of media items returned may be sparse and contain missing
      // elements. Remove all invalid elements.
      // Also remove all elements that are not images by checking its mime type.
      // Media type filters can't be applied if an album is loaded, so an extra
      // filter step is required here to ensure that only images are returned.
      const items =
        result && result.mediaItems
          ? result.mediaItems
              .filter((x: any) => x) // Filter empty or invalid items.
              // Only keep media items with an image mime type.
              .filter((x: any) => x.mimeType && x.mimeType.startsWith("image/"))
          : [];

      photos = photos.concat(items);

      // Set the pageToken for the next request.
      parameters.pageToken = result.nextPageToken;

      // Loop until the required number of photos has been loaded or until there
      // are no more photos, ie. there is no pageToken.
    } while (/* photos.length < 150 &&  */ parameters.pageToken != null);
  } catch (err) {
    // Log the error and prepare to return it.
    error = err;
  }

  return { photos, parameters, error };
};
