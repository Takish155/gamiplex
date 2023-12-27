import { getMovie } from "@/fetch/getMovie";
import { Genres } from "@/types/reponseDataType";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const useLoadMoreDiscover = () => {
  const params = useParams<{ id: string; sort: string }>();

  const { data, isLoading, isFetchingNextPage, isError, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["discover", params.id, params.sort],
      queryFn: ({ pageParam }) =>
        getMovie(
          pageParam,
          (params.sort as Genres) ?? "",
          params.id as string,
          "getByGenres"
        ),
      initialPageParam: 2,
      getNextPageParam: (_, allPages) => allPages.length + 2,
    });

  return {
    data,
    isLoading,
    isFetchingNextPage,
    isError,
    fetchNextPage,
  };
};

export default useLoadMoreDiscover;
