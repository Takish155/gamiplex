import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { InfiniteResponseData } from "./reponseDataType";

export type UseLoadMoreHomeType = {
  data: InfiniteData<InfiniteResponseData | undefined, unknown> | undefined;
  isLoading: boolean;
  isError: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<InfiniteResponseData | undefined, unknown>,
      Error
    >
  >;
};

export interface UseLoadMoreSearchType extends UseLoadMoreHomeType {
  hasNextPage: boolean;
}
