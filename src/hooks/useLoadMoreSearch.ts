import getMovie from "@/fetch/getMovie";
import { Genres } from "@/types/reponseDataType";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const useLoadMoreSearch = () => {
  const params = useParams<{ query: string; sort: string }>();

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["searchData", params.query, params.sort],
    queryFn: ({ pageParam }) =>
      getMovie(pageParam, (params.sort as Genres) ?? "", "", "", params.query),
    initialPageParam: 2,
    getNextPageParam: (_, allPage) => allPage.length + 1,
  });

  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};

export default useLoadMoreSearch;
