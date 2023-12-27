import getMovie from "@/fetch/getMovie";
import { useInfiniteQuery } from "@tanstack/react-query";

const useLoadMoreHome = () => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["infiniteScrollData"],
      queryFn: ({ pageParam }) => getMovie(pageParam, ""),
      initialPageParam: 2,
      getNextPageParam: (_, allPages) => allPages.length + 2,
    });

  return { data, isLoading, isError, fetchNextPage, isFetchingNextPage };
};

export default useLoadMoreHome;
