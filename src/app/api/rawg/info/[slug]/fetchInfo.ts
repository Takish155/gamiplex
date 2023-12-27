import axios from "axios";
import React from "react";

const fetchInfo = async (params: string) => {
  try {
    const gameTrailerResponse = await axios.get(
      `https://api.rawg.io/api/games/${params}/movies`,
      {
        params: {
          key: process.env.API_KEY,
        },
      }
    );

    const gameInfoResponse = await axios.get(
      `https://api.rawg.io/api/games/${params}`,
      {
        params: {
          key: process.env.API_KEY,
        },
      }
    );

    return {
      gameTrailerResponse: gameTrailerResponse.data,
      gameInfoResponse: gameInfoResponse.data,
    };
  } catch (error) {
    throw new Error((error as Error).message.toString());
  }
};

export default fetchInfo;
