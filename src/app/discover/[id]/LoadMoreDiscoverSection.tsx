"use client";

import InfiniteScrollComponent from "@/components/InfiniteScrollComponent";
import useLoadMoreDiscover from "@/hooks/useLoadMoreDiscover";
import React from "react";

const LoadMoreDiscoverSection = () => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useLoadMoreDiscover();
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
