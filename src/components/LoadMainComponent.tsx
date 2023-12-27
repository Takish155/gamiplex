import React from "react";
import Box from "@mui/material/Box";
import GameSection from "./GameSection";
import { gameArticleStyle, mainStyle } from "@/styles/pageStyles";
import { InfiniteResponseData } from "@/types/reponseDataType";

const LoadMainComponent = ({
  data,
  LoadMoreComponent,
  SortingComponent,
}: {
  data: InfiniteResponseData;
  LoadMoreComponent: React.ComponentType;
  SortingComponent?: React.ComponentType;
}) => {
  if (!data) {
    return <p>Error, something went wrong....</p>;
  }
  return (
    <Box component="main" sx={mainStyle}>
      {SortingComponent && <SortingComponent />}
      <Box component="article" id="main" sx={gameArticleStyle}>
        {data.response.results.map((games, index) => {
          return <GameSection data={games} key={index} />;
        })}
        <LoadMoreComponent />
      </Box>
    </Box>
  );
};

export default LoadMainComponent;
