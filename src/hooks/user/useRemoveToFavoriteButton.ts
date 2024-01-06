import removeFavoriteGameAction from "@/actions/removeFavoriteGameAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useRemoveToFavoriteButton = () => {
  const [message, setMessage] = useState("");

  const queryClient = useQueryClient();
  const removeFavorite = useMutation({
    mutationFn: async ({ gameId }: { gameId: number }) =>
      await removeFavoriteGameAction(gameId),
    onSuccess: () => {
      setMessage("Game removed from your favorite list");
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

  return { removeFavorite, message, setMessage };
};

export default useRemoveToFavoriteButton;
