import { Genres, InfiniteResponseData } from "@/types/reponseDataType";
import axios from "axios";

export const getMovie = async (
  page: number,
  sort: Genres | "",
  genres?: string,
  type?: string,
  query?: string
) => {
  const response = await axios.get<InfiniteResponseData>(
    `${process.env.URL}/api/rawg/games`,
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
};

export default getMovie;
