import { useParams } from "next/navigation";
import { TrailerDataType } from "@/types/getGameInfoType";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getGameInfo from "@/fetch/getGameInfo";

const useGetTrailers = () => {
  const params = useParams();
  const [currentTrailer, setCurrentTrailer] = useState<TrailerDataType>();
  const { data, isLoading, isError, isFetched } = useQuery({
    queryKey: ["gameTrailer", params],
    queryFn: () => getGameInfo(params["id"] as string),
  });

  return {
    data,
    isLoading,
    isError,
    currentTrailer,
    setCurrentTrailer,
    isFetched,
  };
};

export default useGetTrailers;
