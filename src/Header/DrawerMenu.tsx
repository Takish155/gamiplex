"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useGetGenres } from "@/hooks/useGetGenres";
import { useRouter } from "next/navigation";
import SearchInput from "./SearchInput";
import Image from "next/image";

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
        <List>
          {genres.data?.response.results.map((genres) => {
            return (
              <ListItem
                sx={{ minWidth: "250px" }}
                disablePadding
                key={genres.id}
              >
                <ListItemButton
                  onClick={() => {
                    router.push(
                      `/discover/${genres.name.toLowerCase().replace(" ", "-")}`
                    );
                    setOpenMenu(false);
                  }}
                >
                  <ListItemIcon>
                    <Image
                      src={genres.image_background}
                      alt={genres.name}
                      height={40}
                      width={40}
                      style={{ borderRadius: "40%" }}
                    />
                  </ListItemIcon>
                  {genres.name}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
