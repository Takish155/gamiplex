import getMovie from "@/fetch/getMovie";
import { Genres } from "@/types/reponseDataType";
import React from "react";
import LoadMoreSearchSection from "../LoadMoreSearchSection";
import LoadMainComponent from "@/components/LoadMainComponent";
import DiscoveryTitle from "@/app/discover/[id]/DiscoveryTitle";
import { LoadMoreSearchContextProvider } from "@/context/UseLoadMoreSearchContext";
import { Metadata } from "next";

const page = async ({
  params,
}: {
  params: { query: string; sort: string };
}) => {
  const data = await getMovie(1, params.sort as Genres, "", "", params.query);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <LoadMoreSearchContextProvider>
      <LoadMainComponent
        data={data}
        LoadMoreComponent={LoadMoreSearchSection}
        SortingComponent={DiscoveryTitle}
      />
    </LoadMoreSearchContextProvider>
  );
};

export default page;

export async function generateMetadata({
  params,
}: {
  params: { query: string };
}): Promise<Metadata> {
  return {
    title: `Search ${params.query} Games  | Gamiplex`,
    description: `Search ${params.query} games on Gamiplex. Find new games to play by searching through our list of ${params.query} games.`,
  };
}
