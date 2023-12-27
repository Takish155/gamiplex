"use client";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import useGetTrailers from "@/hooks/useGetTrailers";
import Image from "next/image";
import React from "react";
import TrailerSectionSkeleton from "../skeletons/TrailerSectionSkeleton";
import { Box, SxProps, Typography } from "@mui/material";
import {
  trailerHeadingStyle,
  trailerListStyle,
  trailerSectionStyle,
} from "../styles/trailerSectionStyles";

const TrailerSection = () => {
  const {
    data,
    isLoading,
    isError,
    currentTrailer,
    setCurrentTrailer,
    isFetched,
  } = useGetTrailers();

  if (isLoading) {
    return <TrailerSectionSkeleton />;
  }

  if (isFetched && !currentTrailer) {
    setCurrentTrailer(data?.response.gameTrailerResponse.results[0]);
  }

  if (isError) {
    return;
  }

  return (
    <Box component="section" sx={trailerSectionStyle}>
      <MediaPlayer title={currentTrailer?.name} src={currentTrailer?.data[480]}>
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails={currentTrailer?.preview}
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>

      <Box>
        <Typography variant="h2" sx={trailerHeadingStyle}>
          Trailers
        </Typography>
        <Box sx={trailerListStyle}>
          <>
            {data?.response.gameTrailerResponse.results.map((trailers) => {
              return (
                <Image
                  key={trailers.id}
                  src={trailers.preview}
                  alt={`Preview trailer of ${trailers.name}`}
                  height={80}
                  width={141}
                  onClick={() => {
                    setCurrentTrailer(trailers);
                  }}
                  style={{
                    maxHeight: "80px",
                    width: "auto",
                    height: "50%",
                    cursor: "pointer",
                    marginBottom: "0.75rem",
                    border:
                      currentTrailer?.data[480] === trailers.data[480]
                        ? "1px solid white"
                        : "",
                  }}
                  className={`max-h-[80px] w-auto h-[50%] cursor-pointer mb-3 ${
                    currentTrailer?.data[480] === trailers.data[480]
                      ? "border border-white"
                      : ""
                  }`}
                />
              );
            })}
          </>
        </Box>
      </Box>
    </Box>
  );
};

export default TrailerSection;
