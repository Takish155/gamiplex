"use client";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  trailerHeadingStyle,
  trailerListStyle,
  trailerSectionStyle,
} from "../styles/trailerSectionStyles";
import { FetchGameInfoType, TrailerDataType } from "@/types/getGameInfoType";
import Image from "next/image";

const TrailerSection = ({ data }: { data: FetchGameInfoType }) => {
  const [currentTrailer, setCurrentTrailer] = useState<TrailerDataType>(
    data.response.gameTrailerResponse.results[0]
  );

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
                onKeyDown={(e) => {
                  if (e.key === "Enter") setCurrentTrailer(trailers);
                }}
                tabIndex={0}
                style={{
                  maxHeight: "80px",
                  width: "auto",
                  height: "50%",
                  cursor: "pointer",
                  marginTop: "0.3rem",
                  marginBottom: "0.75rem",
                  border:
                    currentTrailer?.data[480] === trailers.data[480]
                      ? "1px solid white"
                      : "",
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TrailerSection;
