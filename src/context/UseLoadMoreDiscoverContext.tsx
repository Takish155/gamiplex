"use client";

import useLoadMoreDiscover from "@/hooks/useLoadMoreDiscover";
import { UseLoadMoreHomeType } from "@/types/tanstackQueryTypes";
import { ReactNode, createContext, useContext } from "react";

const LoadMoreDiscoverContext = createContext<UseLoadMoreHomeType | undefined>(
  undefined
);

export const LoadMoreDiscoverContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const LoadMoreDiscoverState = useLoadMoreDiscover();

  return (
    <LoadMoreDiscoverContext.Provider value={LoadMoreDiscoverState}>
      {children}
    </LoadMoreDiscoverContext.Provider>
  );
};

export const UseLoadMoreDiscoverContext = () => {
  return useContext(LoadMoreDiscoverContext);
};
