"use server";

import axios from "axios";

type GameGalleryData = {
  results: {
    image: string;
    hidden: boolean;
  }[];
};

const getGameGalleryAction = async (id: string) => {
  const response = await axios.get<GameGalleryData>(
    `https://api.rawg.io/api/games/${id}/screenshots`,
    {
      params: {
        key: process.env.API_KEY,
      },
    }
  );
  return response.data;
};

export default getGameGalleryAction;
