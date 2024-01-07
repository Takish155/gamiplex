import removeFavoriteGameAction from "@/actions/removeFavoriteGameAction";
import { ActionMessage } from "@/types/actionMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useRemoveToFavoriteButton = () => {
  const [message, setMessage] = useState<ActionMessage>({
    message: "",
    status: 0,
  });

  const queryClient = useQueryClient();
  const removeFavorite = useMutation({
    mutationFn: async ({ gameId }: { gameId: number }) =>
      await removeFavoriteGameAction(gameId),
    onSettled: (response) => {
      setMessage({
        message: response!.message,
        status: response!.status,
      });
      if (response?.status === 200) {
        queryClient.invalidateQueries({
          queryKey: ["favoriteGames"],
        });
      }
    },
  });

  return { removeFavorite, message, setMessage };
};

export default useRemoveToFavoriteButton;
