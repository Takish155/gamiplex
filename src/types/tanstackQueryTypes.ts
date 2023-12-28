import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { InfiniteResponseData } from "./reponseDataType";

export type InfiniteScrollComponentProp = {
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
};

export interface UseLoadMoreHomeType extends InfiniteScrollComponentProp {
  isError: boolean;
}

export interface UseLoadMoreSearchType extends UseLoadMoreHomeType {
  hasNextPage: boolean;
}
