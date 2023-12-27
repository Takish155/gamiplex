"use client";

import useLoadMoreHome from "@/hooks/useLoadMoreHome";
import { UseLoadMoreHomeType } from "@/types/tanstackQueryTypes";
import React, { ReactNode, createContext, useContext } from "react";

const LoadMoreHomeContext = createContext<UseLoadMoreHomeType | undefined>(
  undefined
);

export const LoadMoreHomeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const LoadMoreHomeState = useLoadMoreHome();

  return (
    <LoadMoreHomeContext.Provider value={LoadMoreHomeState}>
      {children}
    </LoadMoreHomeContext.Provider>
  );
};

export const UseLoadMoreHomeContext = () => {
  return useContext(LoadMoreHomeContext);
};
