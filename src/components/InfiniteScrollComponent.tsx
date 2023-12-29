"use client";

import React from "react";
import GameSection from "./GameSection";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { InfiniteScrollComponentProp } from "@/types/tanstackQueryTypes";
import useInfiniteScrollComponent from "@/hooks/useInfiniteScrollComponent";
import { motion } from "framer-motion";
import {
  loadMoreButtonDivStyle,
  loadMoreButtonStyle,
  loadingContainerStyle,
  noMorePageToBeLoadedStyle,
} from "@/styles/pageStyles";

const InfiniteScrollComponent = ({
  data,
  fetchNextPage,
  isFetchingNextPage,
  isLoading,
}: InfiniteScrollComponentProp) => {
  const {
    ref,
    loadMore,
    setLoadMore,
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
                return <GameSection data={games} key={index} index={index} />;
              })}
            </React.Fragment>
          );
        })}

      {loadMore ? (
        showLoadComponent ? (
          <Box
            id="loadMoreComponent"
            ref={ref}
            sx={loadingContainerStyle}
          ></Box>
        ) : (
          <Typography sx={noMorePageToBeLoadedStyle}>
            No more page available...
          </Typography>
        )
      ) : (
        <motion.div
          style={loadMoreButtonDivStyle as React.CSSProperties}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 8 * 0.3, ease: "easeInOut", duration: 0.5 }}
        >
          <Button
            variant="contained"
            sx={loadMoreButtonStyle}
            onClick={() => {
              setLoadMore(true);
            }}
          >
            Load More
          </Button>
        </motion.div>
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
