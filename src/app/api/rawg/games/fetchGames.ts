import axios from "axios";

export const fetchGames = async (
  pageNumber: string | null,
  genre: string | null,
  query: string | null,
  sort: string | null,
  type: string | null
) => {
  const url = "https://api.rawg.io/api/games";
  try {
    if (type === "getByGenres") {
      const response = await axios.get(url, {
        params: {
          key: process.env.API_KEY,
          page_size: 18,
          page: pageNumber,
          search: query ?? "",
          ordering: sort ?? "",
          genres: genre === "rpg" ? "role-playing-games-rpg" : genre,
        },
      });

      return response.data;
    }

    const response = await axios.get(url, {
      params: {
        key: process.env.API_KEY,
        page_size: 18,
        page: pageNumber,
        search: query ?? "",
        ordering: sort ?? "",
      },
    });
    return response.data;
  } catch (err) {
    console.log((err as Error).message.toString());
  }
};
