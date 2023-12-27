import getMovie from "@/fetch/getMovie";
import React from "react";
import LoadMoreSearchSection from "./LoadMoreSearchSection";
import LoadMainComponent from "@/components/LoadMainComponent";
import { LoadMoreSearchContextProvider } from "@/context/UseLoadMoreSearchContext";
import DiscoveryTitle from "@/app/discover/[id]/DiscoveryTitle";
import { Metadata } from "next";

const page = async ({ params }: { params: { query: string } }) => {
  const data = await getMovie(1, "", "", "", params.query);
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
