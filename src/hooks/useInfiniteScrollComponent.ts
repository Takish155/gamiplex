import { InfiniteResponseData } from "@/types/reponseDataType";
import { SxProps } from "@mui/material";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useInfiniteScrollComponent = (
  fetchNextPage:
    | ((
        options?: FetchNextPageOptions | undefined
      ) => Promise<
        InfiniteQueryObserverResult<
          InfiniteData<InfiniteResponseData | undefined, unknown>,
          Error
        >
      >)
    | undefined
) => {
  const [loadMore, setLoadMore] = useState(false);
  const { ref, inView } = useInView();
  const [showLoadComponent, setShowLoadComponent] = useState(true);

  useEffect(() => {
    if (inView && fetchNextPage && loadMore) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, loadMore]);

  return {
    ref,
    loadMore,
    setLoadMore,
    showLoadComponent,
    setShowLoadComponent,
  };
};

export default useInfiniteScrollComponent;
