"use client";

import React from "react";
import GameSection from "./GameSection";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { InfiniteScrollComponentProp } from "@/types/tanstackQueryTypes";
import useInfiniteScrollComponent from "@/hooks/useInfiniteScrollComponent";
import { noMorePageToBeLoadedStyle } from "@/styles/pageStyles";

const InfiniteScrollComponent = ({
  data,
  fetchNextPage,
  isFetchingNextPage,
  isLoading,
}: InfiniteScrollComponentProp) => {
  const {
    loadMoreButtonDivStyle,
    loadMoreButtonStyle,
    ref,
    loadMore,
    setLoadMore,
    skeletonMapper,
    showLoadComponent,
    setShowLoadComponent,
  } = useInfiniteScrollComponent(fetchNextPage);

  return (
    <>
      {loadMore &&
        data?.pages.map((data, index) => {
          if (!data || !data.response) {
            showLoadComponent && setShowLoadComponent(false);
            return;
          }
          if (!data.response.results) {
            showLoadComponent && setShowLoadComponent(false);
            return;
          }
          return (
            <React.Fragment key={index}>
              {data?.response.results.map((games, index) => {
                return <GameSection data={games} key={index} />;
              })}
            </React.Fragment>
          );
        })}

      {loadMore ? (
        showLoadComponent ? (
          <Box ref={ref} id="loadMoreComponent"></Box>
        ) : (
          <Typography sx={noMorePageToBeLoadedStyle}>
            No more page available...
          </Typography>
        )
      ) : (
        <Box sx={loadMoreButtonDivStyle}>
          <Button
            variant="contained"
            sx={loadMoreButtonStyle}
            onClick={() => {
              setLoadMore(true);
              if (fetchNextPage) {
                fetchNextPage();
              }
            }}
          >
            Load More
          </Button>
        </Box>
      )}

      {isLoading ||
        (isFetchingNextPage &&
          skeletonMapper.map((key) => (
            <Skeleton
              key={key}
              width={280}
              height={350}
              variant="rectangular"
              sx={{ borderRadius: "1.5rem" }}
            />
          )))}
    </>
  );
};

export default InfiniteScrollComponent;
