"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import SignOutMenuItem from "./SignOutMenuItem";
import { menuItem } from "./_userStyles";
import { usePathname, useRouter } from "next/navigation";

const UserMenu = () => {
  const page = usePathname();
  const router = useRouter();

  return (
    <Grid item xs={12} md={3}>
      <MenuList>
        <MenuItem
          selected={page === "/user" ? true : false}
          sx={menuItem}
          onClick={() => router.push("/user")}
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText>Favorite Games</ListItemText>
        </MenuItem>
        <MenuItem
          selected={page === "/user/settings" ? true : false}
          sx={menuItem}
          onClick={() => router.push("/user/settings")}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Account Settings</ListItemText>
        </MenuItem>
        <Divider />
        <SignOutMenuItem />
      </MenuList>
    </Grid>
  );
};

export default UserMenu;
