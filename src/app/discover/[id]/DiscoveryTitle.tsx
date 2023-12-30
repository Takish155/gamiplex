"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  discoverSortStyle,
  discoverTitleSectionStyle,
  discoverTitleStyle,
} from "./_discoverStyle";

const DiscoveryTitle = () => {
  const router = useRouter();
  const pathname = usePathname();

  const fields = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "metacritic",
    "rating",
  ];

  const pathName = pathname.split("/");
  return (
    <Box component="section" sx={discoverTitleSectionStyle}>
      <Typography variant="h2" sx={discoverTitleStyle}>
        {pathName[2].replace("%20", " ").replace("-", " ").replace("games", "")}{" "}
        Games
      </Typography>
      <FormControl sx={discoverSortStyle}>
        <InputLabel id="sort-games-by-label">Sort Games By</InputLabel>
        <Select
          labelId="sort-games-by-label"
          value={pathName[3] ?? "popularity"}
          defaultValue="popularity"
          label="Select sort games by"
        >
          <MenuItem
            value="popularity"
            onClick={() => {
              router.push(
                `/${pathname[1] === "d" ? "discover" : pathName[1]}/${
                  pathName[2]
                }`
              );
            }}
          >
            Relevance
          </MenuItem>
          {fields.map((field) => {
            return [
              <MenuItem
                key={field}
                value={"-" + field}
                onClick={() => {
                  router.push(`/${pathName[1]}/${pathName[2]}/-${field}/`);
                }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)} Descending
              </MenuItem>,
              <MenuItem
                key={field}
                value={field}
                onClick={() => {
                  router.push(`/${pathName[1]}/${pathName[2]}/${field}/`);
                }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)} Ascending
              </MenuItem>,
            ];
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DiscoveryTitle;
