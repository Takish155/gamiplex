"use client";

import removeFavoriteGameAction from "@/actions/removeFavoriteGameAction";
import { Button, CircularProgress } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const RemoveToFavoriteButton = ({ gameId }: { gameId: number }) => {
  const queryClient = useQueryClient();
  const removeFavorite = useMutation({
    mutationFn: async () => await removeFavoriteGameAction(gameId),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["favoriteGames"],
      });
    },
  });

  return (
    <>
      {removeFavorite.isPending ? (
        <CircularProgress />
      ) : (
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            removeFavorite.mutate();
          }}
        >
          Remove from Favorite list
        </Button>
      )}
    </>
  );
};

export default RemoveToFavoriteButton;
