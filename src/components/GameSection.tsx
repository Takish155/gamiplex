"use client";

import { ResponseDataResult } from "@/types/reponseDataType";
import {
  detailsContainerStyle,
  detailsTextStyle,
  headingStyle,
  imageContainerStyle,
  infoContainerStyle,
  paperStyle,
} from "@/styles/gameSectionStyle";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import noImage from "@/../public/images/no-image.png";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MotionSection from "./MotionSection";

const GameSection = ({
  data,
  index,
}: {
  data: ResponseDataResult;
  index: number;
}) => {
  return (
    <MotionSection
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.3, ease: "easeInOut", duration: 0.5 }}
    >
      <Link href={`/games/${data.id}`}>
        <Paper key={data.id} sx={paperStyle} elevation={6}>
          <>
            <Box sx={imageContainerStyle}>
              <Image
                src={data.background_image ?? noImage}
                alt={`Background image of ${data.background_image}`}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </Box>
            <Box sx={infoContainerStyle}>
              <Typography variant="h2" sx={headingStyle}>
                {data.name}
              </Typography>
              <Box sx={detailsContainerStyle}>
                <Typography variant="body1" sx={detailsTextStyle}>
                  <AccessTimeIcon /> {data.released ?? "Unknown"}
                </Typography>
                <Typography sx={detailsTextStyle}>
                  <StarIcon /> {data.rating}
                </Typography>
              </Box>
            </Box>
          </>
        </Paper>
      </Link>
    </MotionSection>
  );
};

export default GameSection;
