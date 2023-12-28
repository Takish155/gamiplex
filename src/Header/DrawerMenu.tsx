"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useGetGenres } from "@/hooks/useGetGenres";
import { useRouter } from "next/navigation";
import SearchInput from "./SearchInput";

const DrawerMenu = () => {
  const { genres, openMenu, setOpenMenu } = useGetGenres();
  const router = useRouter();

  if (genres.isLoading) {
    <span className="loading loading-spinner loading-lg"></span>;
  }

  if (genres.isError) {
    return;
  }

  return (
    <>
      <IconButton
        onClick={() => setOpenMenu(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ marginRight: "1rem" }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={openMenu} onClose={() => setOpenMenu(!openMenu)}>
        <SearchInput type="menu" setOpenMenu={setOpenMenu} />
        {genres.data?.response.results.map((genres) => {
          return (
            <List key={genres.id}>
              <ListItem disablePadding sx={{ minWidth: "250px" }}>
                <ListItemButton
                  onClick={() => {
                    router.push(
                      `/discover/${genres.name.toLowerCase().replace(" ", "-")}`
                    );
                    setOpenMenu(false);
                  }}
                >
                  {genres.name}
                </ListItemButton>
              </ListItem>
            </List>
          );
        })}
      </Drawer>
    </>
  );
};

export default DrawerMenu;
