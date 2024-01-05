"use client";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, CircularProgress, useMediaQuery } from "@mui/material";
import { searchInputPaper } from "./_headerStyle";
import { signOut, useSession } from "next-auth/react";

const SearchInput = ({
  type,
  setOpenMenu,
}: {
  type: string;
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const matches = useMediaQuery("(max-width:750px)");
  const session = useSession();

  return (
    <Box
      sx={{
        margin: "1rem auto",
        gap: "1rem",
        justifyContent: "center",
        display:
          type === "header" && !matches
            ? "flex"
            : type !== "header" && matches
            ? "flex"
            : "none",
        "@media (max-width: 750px)": {
          flexWrap: "wrap",
        },
      }}
    >
      <Paper component="form" sx={searchInputPaper}>
        <>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Games"
            inputProps={{ "aria-label": "search games" }}
          />
          <IconButton
            type="button"
            sx={{ padding: "1rem", color: "#fff" }}
            aria-label="search"
            onClick={() => {
              router.push(`/search/${input}`);
              setOpenMenu && setOpenMenu(false);
            }}
          >
            <SearchIcon />
          </IconButton>
        </>
      </Paper>
      {session.status === "loading" && <CircularProgress />}
      {session.status === "unauthenticated" && (
        <Button
          variant="text"
          size="medium"
          onClick={() => router.push("/auth/login")}
        >
          Login
        </Button>
      )}
      {session.status === "authenticated" && (
        <Button variant="text" size="medium" onClick={() => signOut()}>
          Logout
        </Button>
      )}
    </Box>
  );
};

export default SearchInput;
