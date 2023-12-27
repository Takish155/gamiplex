import { GenreDataType } from "@/types/genreDataType";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export const useGetGenres = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get<GenreDataType>("/api/rawg/genre");
      return response.data;
    } catch (err) {
      throw new Error((err as AxiosError).message);
    }
  };

  return {
    genres: useQuery({
      queryKey: ["genres"],
      queryFn: fetchData,
    }),
    openMenu,
    setOpenMenu,
  };
};
