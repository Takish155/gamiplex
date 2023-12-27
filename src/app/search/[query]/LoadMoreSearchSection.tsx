"use client";

import InfiniteScrollComponent from "@/components/InfiniteScrollComponent";
import { UseLoadMoreSearchContext } from "@/context/UseLoadMoreSearchContext";
import React from "react";

const LoadMoreSearchSection = () => {
  const { data, isLoading, isFetchingNextPage, isError, fetchNextPage } =
    UseLoadMoreSearchContext() || {};
  return (
    <InfiniteScrollComponent
      data={data}
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default LoadMoreSearchSection;
