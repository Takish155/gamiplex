"use client";

import { ThemeOptions, createTheme } from "@mui/material/styles";

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

export const themeOptions = createTheme(darkTheme);
