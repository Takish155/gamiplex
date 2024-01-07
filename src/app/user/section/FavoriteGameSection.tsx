import React from "react";
import Image from "next/image";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import {
  detailsContainerStyle,
  detailsTextStyle,
  headingStyle,
  imageContainerStyle,
  infoContainerStyle,
  paperStyle,
  removeButtonContainer,
} from "@/styles/gameSectionStyle";
import noImage from "@/../public/images/no-image.png";
import { UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const FavoriteGameSection = ({
  gameId,
  background_image,
  gameName,
  gameRealsed,
  gameRating,
  isPending,
  removeFavorite,
}: {
  gameId: string;
  gameName: string;
  background_image?: string | null;
  gameRealsed: string | null;
  gameRating: number;
  isPending: boolean;
  removeFavorite: UseMutationResult<
    | {
        message: string;
        status: number;
      }
    | undefined,
    Error,
    {
      gameId: number;
    },
    unknown
  >;
}) => {
  const router = useRouter();

  return (
    <Paper key={gameId} sx={paperStyle} elevation={6}>
      <>
        <Box sx={imageContainerStyle}>
          <Image
            src={background_image ?? noImage}
            alt={`Background image of ${background_image}`}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 300px) 100vw, 300px"
          />
        </Box>
        <Box sx={infoContainerStyle}>
          <Typography variant="h2" sx={headingStyle}>
            {gameName}
          </Typography>
          <Box sx={detailsContainerStyle}>
            <Typography variant="body1" sx={detailsTextStyle}>
              <AccessTimeIcon /> {gameRealsed ?? "Unknown"}
            </Typography>
            <Typography sx={detailsTextStyle}>
              <StarIcon /> {gameRating}
            </Typography>
          </Box>
          <Box sx={removeButtonContainer}>
            <>
              {isPending ? (
                <CircularProgress />
              ) : (
                <>
                  <Button
                    variant="contained"
                    onClick={() => router.push(`/games/${gameId}`)}
                  >
                    Visit Game Page
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      removeFavorite.mutate({
                        gameId: parseInt(gameId),
                      });
                    }}
                  >
                    Remove from Favorite list
                  </Button>
                </>
              )}
            </>
          </Box>
        </Box>
      </>
    </Paper>
  );
};

export default FavoriteGameSection;
