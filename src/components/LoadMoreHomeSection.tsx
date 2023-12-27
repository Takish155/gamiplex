"use client";

import { UseLoadMoreHomeContext } from "@/context/UseInfiniteScrollContext";
import React from "react";
import InfiniteScrollComponent from "./InfiniteScrollComponent";

const LoadMoreHomeSection = () => {
  const { isLoading, data, isFetchingNextPage, fetchNextPage } =
    UseLoadMoreHomeContext() || {};

  return (
    <InfiniteScrollComponent
      data={data}
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default LoadMoreHomeSection;
