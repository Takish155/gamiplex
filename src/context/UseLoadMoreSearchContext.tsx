"use client";

import useLoadMoreSearch from "@/hooks/useLoadMoreSearch";
import { UseLoadMoreSearchType } from "@/types/tanstackQueryTypes";
import { ReactNode, createContext, useContext } from "react";

const LoadMoreSearchContext = createContext<UseLoadMoreSearchType | undefined>(
  undefined
);

export const LoadMoreSearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const LoadMoreSearchState = useLoadMoreSearch();

  return (
    <LoadMoreSearchContext.Provider value={LoadMoreSearchState}>
      {children}
    </LoadMoreSearchContext.Provider>
  );
};

export const UseLoadMoreSearchContext = () => {
  return useContext(LoadMoreSearchContext);
};
