import { ResponseData } from "@/types/reponseDataType";
import axios from "axios";

const getSearchMovie = async (query: string, page: number) => {
  const response = await axios.get<ResponseData>(
    `${process.env.URL}/api/games`,
    {
      params: {
        key: process.env.API_KEY,
        page_size: 16,
        page: page,
        search: query,
      },
    }
  );
  return response.data;
};

export default getSearchMovie;
