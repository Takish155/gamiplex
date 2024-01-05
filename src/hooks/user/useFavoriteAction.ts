import addFavoriteGameAction from "@/actions/addFavoriteGameAction";
import { FetchGameInfoType } from "@/types/getGameInfoType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useFavoriteAction = (data: FetchGameInfoType) => {
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  const addToFavorite = useMutation({
    mutationFn: async () =>
      addFavoriteGameAction({
        id: data.response.gameInfoResponse.id,
        name: data.response.gameInfoResponse.name,
        background_image: data.response.gameInfoResponse.background_image,
        released: data.response.gameInfoResponse.released,
        rating: data.response.gameInfoResponse.rating,
      }),
    onSuccess: () => {
      setMessage("Game added to your favorite list");
    },
    onError: (error) => {
      setMessage(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["favoriteGames"],
      });
    },
  });

  return { addToFavorite, message };
};

export default useFavoriteAction;
