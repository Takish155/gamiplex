"use client";

import showFavoriteAction from "@/actions/showFavoriteAction";
import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { favoriteGameListContainer } from "@/styles/gameSectionStyle";
import { loadingPageContainer } from "../_userStyles";
import useRemoveToFavoriteButton from "@/hooks/user/useRemoveToFavoriteButton";
import Link from "next/link";
import FavoriteGameSection from "./FavoriteGameSection";

const FavoriteGameList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["favoriteGames"],
    queryFn: () => showFavoriteAction(),
  });
  const { message, removeFavorite, setMessage } = useRemoveToFavoriteButton();

  if (isLoading) {
    return (
      <Box sx={loadingPageContainer}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {message.message && (
        <Alert
          sx={{ marginBottom: "2rem" }}
          severity={message.status === 200 ? "success" : "error"}
          onClose={() =>
            setMessage({
              status: 0,
              message: "",
            })
          }
        >
          {message.message}
        </Alert>
      )}
      <Box sx={favoriteGameListContainer}>
        {data?.length !== 0 ? (
          data?.map((game) => {
            return (
              <FavoriteGameSection
                key={game.gameId}
                gameId={game.gameId!}
                gameName={game.name}
                gameRating={game.rating}
                gameRealsed={game.released}
                background_image={game.background_image}
                isPending={removeFavorite.isPending}
                removeFavorite={removeFavorite}
              />
            );
          })
        ) : (
          <Typography variant="body1">
            You don&apos;t have any favorite games, why don&apos;t you add some?
            Head to the{" "}
            <Link href="/" style={{ textDecoration: "underline" }}>
              games page
            </Link>{" "}
            to add some.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default FavoriteGameList;
