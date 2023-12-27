import { FetchGameInfoType } from "@/types/getGameInfoType";
import axios from "axios";

const getGameInfo = async (id: string) => {
  const response = await axios.get<FetchGameInfoType>(
    `${process.env.NEXT_PUBLIC_URL}/api/rawg/info/${id}`
  );

  return response.data;
};

export default getGameInfo;
