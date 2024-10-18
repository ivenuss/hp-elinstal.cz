import { libraryApiSearch, refreshToken } from "lib/google";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await refreshToken();
  const access_token = token?.access_token;

  const searchResponse = await libraryApiSearch(access_token, {
    albumId:
      "AONgtYhyeFnFnVUfHBE1FVLs5Xe3-UeWTePuJW6UdBKySCAyx7JLmn6y-P6Cr9C64DZLWmnzOK3B",
    pageSize: 100,
  });

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=300"
  );

  res.status(200).json(searchResponse);
}
