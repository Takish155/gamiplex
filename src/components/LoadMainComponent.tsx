import React from "react";
import Box from "@mui/material/Box";
import GameSection from "./GameSection";
import { gameArticleStyle, mainStyle } from "@/styles/pageStyles";
import { InfiniteResponseData } from "@/types/reponseDataType";
import Typography from "@mui/material/Typography";

const LoadMainComponent = ({
  data,
  LoadMoreComponent,
  SortingComponent,
  typeOf,
}: {
  data: InfiniteResponseData;
  LoadMoreComponent: React.ComponentType;
  SortingComponent?: React.ComponentType;
  typeOf?: string;
}) => {
  if (!data) {
    return null;
  }

  return (
    <Box component="main" sx={mainStyle}>
      {SortingComponent && <SortingComponent />}
      {typeOf === "search" && data.response.results.length === 0 ? (
        <Typography variant="body1" sx={{ fontSize: "1.25rem" }}>
          No games found, please try other keyword...
        </Typography>
      ) : (
        <Box component="article" id="main" sx={gameArticleStyle}>
          {data.response.results.map((games, index) => {
            return <GameSection data={games} key={index} index={index} />;
          })}
          <LoadMoreComponent />
        </Box>
      )}
    </Box>
  );
};

export default LoadMainComponent;
