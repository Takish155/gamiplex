"use client";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, useMediaQuery } from "@mui/material";

const searchInputPaper = {
  padding: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: "250px",
};

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

  return (
    <Box
      sx={{
        display:
          type === "header" && !matches
            ? "block"
            : type !== "header" && matches
            ? "block"
            : "none",
      }}
    >
      <Paper component="form" sx={searchInputPaper}>
        <>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              "& .MuiInputBase-input": {
                color: "#fff",
              },
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Games"
            inputProps={{ "aria-label": "search games" }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px", color: "#fff" }}
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
    </Box>
  );
};

export default SearchInput;
