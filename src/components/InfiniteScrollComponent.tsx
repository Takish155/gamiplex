"use client";

import React from "react";
import GameSection from "./GameSection";
import { Box, Button, Skeleton, SxProps } from "@mui/material";
import { InfiniteScrollComponentProp } from "@/types/tanstackQueryTypes";
import useInfiniteScrollComponent from "@/hooks/useInfiniteScrollComponent";

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
  } = useInfiniteScrollComponent(fetchNextPage);

  return (
    <>
      {loadMore &&
        data?.pages.map((data, index) => {
          return (
            <React.Fragment key={index}>
              {data?.response.results.map((games, index) => {
                return <GameSection data={games} key={index} />;
              })}
            </React.Fragment>
          );
        })}

      {loadMore ? (
        <Box ref={ref}></Box>
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
