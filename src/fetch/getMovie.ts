import { Genres, InfiniteResponseData } from "@/types/reponseDataType";
import axios, { AxiosError } from "axios";

export const getMovie = async (
  page: number,
  sort: Genres | "",
  genres?: string,
  type?: string,
  query?: string
) => {
  try {
    const response = await axios.get<InfiniteResponseData>(
      `${process.env.NEXT_PUBLIC_URL}/api/rawg/games`,
      {
        params: {
          type: type,
          genre: genres,
          page: page,
          sort: sort,
          query: query,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getMovie;
