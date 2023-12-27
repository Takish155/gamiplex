import axios from "axios";

export const fetchGenres = async () => {
  const url = "https://api.rawg.io/api/genres";
  try {
    const response = await axios.get(url, {
      params: {
        key: process.env.API_KEY,
      },
    });

    return response.data;
  } catch (err) {
    console.error((err as Error).message.toString());
  }
};
