"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import showFavoriteAction from "@/actions/showFavoriteAction";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import {
  detailsContainerStyle,
  detailsTextStyle,
  headingStyle,
  imageContainerStyle,
  infoContainerStyle,
  paperStyle,
  removeButtonContainer,
  favoriteGameListContainer,
} from "@/styles/gameSectionStyle";
import noImage from "@/../public/images/no-image.png";
import { loadingPageContainer } from "../_userStyles";
import useRemoveToFavoriteButton from "@/hooks/user/useRemoveToFavoriteButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FavoriteGameSection from "./FavoriteGameSection";

const FavoriteGameList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["favoriteGames"],
    queryFn: () => showFavoriteAction(),
  });
  const { message, removeFavorite, setMessage } = useRemoveToFavoriteButton();
  const router = useRouter();

  if (isLoading) {
    return (
      <Box sx={loadingPageContainer}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {message && (
        <Alert
          sx={{ marginBottom: "2rem" }}
          severity={
            message === "Game removed from your favorite list"
              ? "success"
              : "error"
          }
          onClose={() => setMessage("")}
        >
          {message}
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
