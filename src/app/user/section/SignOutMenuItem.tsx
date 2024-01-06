"use client";
import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import React from "react";
import { signOut } from "next-auth/react";
import { menuItem } from "../_userStyles";

const SignOutMenuItem = () => {
  return (
    <MenuItem sx={menuItem} onClick={() => signOut()}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText>Sign out</ListItemText>
    </MenuItem>
  );
};

export default SignOutMenuItem;
