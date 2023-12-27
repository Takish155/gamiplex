"use client";

import InfiniteScrollComponent from "@/components/InfiniteScrollComponent";
import useLoadMoreDiscover from "@/hooks/useLoadMoreDiscover";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const LoadMoreDiscoverSection = () => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useLoadMoreDiscover();

  if (!data || !fetchNextPage || data.pages.includes(undefined)) return;

  return (
    <InfiniteScrollComponent
      data={data}
      isFetchingNextPage={isFetchingNextPage}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default LoadMoreDiscoverSection;
