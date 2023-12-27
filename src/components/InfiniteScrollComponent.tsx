"use client";

import { InfiniteResponseData } from "@/types/reponseDataType";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import GameSection from "./GameSection";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Button,
  CircularProgress,
  SxProps,
  useTheme,
} from "@mui/material";

const InfiniteScrollComponent = ({
  data,
  fetchNextPage,
  isFetchingNextPage,
  isLoading,
}: {
  data: InfiniteData<InfiniteResponseData | undefined, unknown> | undefined;
  fetchNextPage:
    | ((
        options?: FetchNextPageOptions | undefined
      ) => Promise<
        InfiniteQueryObserverResult<
          InfiniteData<InfiniteResponseData | undefined, unknown>,
          Error
        >
      >)
    | undefined;
  isFetchingNextPage: boolean | undefined;
  isLoading: boolean | undefined;
}) => {
  const [loadMore, setLoadMore] = useState(false);
  const { ref, inView } = useInView();
  const theme = useTheme();

  useEffect(() => {
    if (inView && fetchNextPage && loadMore) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, loadMore]);

  const loadMoreButtonDivStyle: SxProps = {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
  };

  const loadMoreButtonStyle: SxProps = {
    width: "10rem",
  };

  const loadingContainerStyle: SxProps = {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  };

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
        <Box ref={ref} sx={{ width: "100vw" }}></Box>
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
        (isFetchingNextPage && (
          <Box sx={loadingContainerStyle}>
            <CircularProgress />
          </Box>
        ))}
    </>
  );
};

export default InfiniteScrollComponent;
