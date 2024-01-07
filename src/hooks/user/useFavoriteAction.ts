import addFavoriteGameAction from "@/actions/addFavoriteGameAction";
import { ActionMessage } from "@/types/actionMessage";
import { FetchGameInfoType } from "@/types/getGameInfoType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useFavoriteAction = (data: FetchGameInfoType) => {
  const [message, setMessage] = useState<ActionMessage>({
    message: "",
    status: 200,
  });
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
    onSettled: (response) => {
      setMessage({
        message: response?.message!,
        status: response?.status!,
      });
      if (response?.status === 200) {
        queryClient.invalidateQueries({
          queryKey: ["favoriteGames"],
        });
      }
    },
  });

  return { addToFavorite, message };
};

export default useFavoriteAction;
