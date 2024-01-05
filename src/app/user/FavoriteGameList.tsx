"use client";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import showFavoriteAction from "@/actions/showFavoriteAction";
import {
  Box,
  CircularProgress,
  Paper,
  SxProps,
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
} from "@/styles/gameSectionStyle";
import noImage from "@/../public/images/no-image.png";
import RemoveToFavoriteButton from "./RemoveToFavoriteButton";
import { errorPageStyle } from "@/styles/pageStyles";
import { loadingPageContainer } from "./_userStyles";

const FavoriteGameList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["favoriteGames"],
    queryFn: () => showFavoriteAction(),
  });

  if (isLoading) {
    return (
      <Box sx={loadingPageContainer}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "3rem",
      }}
    >
      {data?.map((game) => {
        return (
          <Paper key={game.id} sx={paperStyle} elevation={6}>
            <>
              <Box sx={imageContainerStyle}>
                <Image
                  src={game.background_image ?? noImage}
                  alt={`Background image of ${game.background_image}`}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </Box>
              <Box sx={infoContainerStyle}>
                <Typography variant="h2" sx={headingStyle}>
                  {game.name}
                </Typography>
                <Box sx={detailsContainerStyle}>
                  <Typography variant="body1" sx={detailsTextStyle}>
                    <AccessTimeIcon /> {game.released ?? "Unknown"}
                  </Typography>
                  <Typography sx={detailsTextStyle}>
                    <StarIcon /> {game.rating}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2rem",
                  }}
                >
                  <RemoveToFavoriteButton gameId={parseInt(game.gameId!)} />
                </Box>
              </Box>
            </>
          </Paper>
        );
      })}
    </Box>
  );
};

export default FavoriteGameList;
