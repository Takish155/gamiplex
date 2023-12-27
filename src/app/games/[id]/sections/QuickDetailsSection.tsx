import { FetchGameInfoType } from "@/types/getGameInfoType";
import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  infoDividerStyle,
  infoHeadingStyle,
  infoParagraphStyle,
  infoStyleContainer,
  quickDetailsSectionStyle,
  infoBackgroundImageStyle,
} from "../styles/quickDetailsSectionStyles";

const QuickDetails = async ({ data }: { data: FetchGameInfoType }) => {
  return (
    <Box component="section" sx={quickDetailsSectionStyle}>
      <Image
        src={data.response.gameInfoResponse.background_image}
        width={270}
        height={90}
        alt={`Background image of ${data.response.gameInfoResponse.name}`}
        style={infoBackgroundImageStyle}
      />
      <Box sx={infoStyleContainer}>
        <Typography sx={infoHeadingStyle}>Original Name</Typography>
        <Typography sx={infoParagraphStyle}>
          {data.response.gameInfoResponse.name_original ??
            data.response.gameInfoResponse.name}
        </Typography>
      </Box>
      <Divider component="div" sx={infoDividerStyle} />
      <Box sx={infoStyleContainer}>
        <Typography sx={infoHeadingStyle}>Release Date</Typography>
        <Typography sx={infoParagraphStyle}>
          {data.response.gameInfoResponse.released ?? ""}
        </Typography>
      </Box>
      <Divider component="div" sx={infoDividerStyle} />
      <Box style={{ gap: "2.5rem" }} sx={infoStyleContainer}>
        <Typography sx={infoHeadingStyle}>Platforms</Typography>
        <Typography sx={infoParagraphStyle}>
          {data.response.gameInfoResponse.platforms.map((platform, index) => {
            if (index !== data.response.gameInfoResponse.platforms.length - 1) {
              return platform.platform.name + ", ";
            }
            return " and " + platform.platform.name;
          })}
        </Typography>
      </Box>
      <Divider component="div" sx={infoDividerStyle} />
      <Box sx={infoStyleContainer}>
        <Typography sx={infoHeadingStyle}>Genres</Typography>
        <Typography sx={infoParagraphStyle}>
          {data.response.gameInfoResponse.esrb_rating?.name ?? "~"}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuickDetails;
