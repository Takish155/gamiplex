import React from "react";
import type { Metadata } from "next";
import getGameInfo from "@/fetch/getGameInfo";
import TrailerSection from "./sections/TrailerSection";
import QuickDetails from "./sections/QuickDetailsSection";
import GameDescription from "./sections/GameDescriptionSection";
import { htmlToText } from "html-to-text";
import Box from "@mui/material/Box";
import ComputerRequirements from "./sections/ComputerRequirementsSection";
import {
  articleStyles,
  articleStylesAlt,
  mainStyles,
  sectionStyles,
  sectionStylesAlt,
} from "@/styles/gameInfoStyle";
import GameGallerySection from "./sections/GameGallerySection";

const GamePage = async ({ params }: { params: { id: string } }) => {
  const data = await getGameInfo(params.id);

  return (
    <Box component="main" sx={mainStyles}>
      {data.response.gameInfoResponse.movies_count !== 0 ? (
        <>
          <Box sx={articleStyles} component="article">
            <TrailerSection data={data} />
            <QuickDetails data={data} />
          </Box>
          <Box sx={sectionStyles} component="section">
            <GameDescription data={data} />
          </Box>
          <GameGallerySection />
          <ComputerRequirements data={data} />
        </>
      ) : (
        <>
          <Box sx={articleStylesAlt} component="article">
            <QuickDetails data={data} />
            <Box sx={sectionStylesAlt} component="section">
              <GameDescription data={data} />
            </Box>
          </Box>
          <GameGallerySection />
          <ComputerRequirements data={data} />
        </>
      )}
    </Box>
  );
};

export default GamePage;

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await getGameInfo(params.id);
  return {
    title: `${data.response.gameInfoResponse.name} | Gamiplex`,
    description: htmlToText(data.response.gameInfoResponse.description),
  };
}
