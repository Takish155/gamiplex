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

  useEffect(() => {
    if (inView && fetchNextPage && loadMore) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, loadMore]);
  const skeletonMapper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const loadMoreButtonDivStyle: SxProps = {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
  };

  const loadMoreButtonStyle: SxProps = {
    width: "10rem",
  };

  return {
    loadMoreButtonDivStyle,
    loadMoreButtonStyle,
    ref,
    loadMore,
    setLoadMore,
    skeletonMapper,
  };
};

export default useInfiniteScrollComponent;
