"use client";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import SortIcon from "@mui/icons-material/Sort";
import PersonIcon from "@mui/icons-material/Person";
import { usePathname } from "next/navigation";
import { SxProps } from "@mui/material";

const navIcon: SxProps = { fontSize: "2rem" };

const NavBar = () => {
  const path = process.env.NEXT_PUBLIC_URL + usePathname();
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
      }}
    >
      <Link href="/">
        <IconButton
          aria-label="link to home page"
          sx={{
            borderRadius: "0",
            backgroundColor:
              path === `${process.env.NEXT_PUBLIC_URL}/`
                ? "rgba(255, 255, 255, 0.08)"
                : "",
          }}
        >
          <HomeIcon sx={navIcon} />
        </IconButton>
      </Link>
      <Link href="/discover/action">
        <IconButton
          aria-label="link to discover page"
          sx={{
            borderRadius: "0",
            backgroundColor: path.includes(
              `${process.env.NEXT_PUBLIC_URL}/discover`
            )
              ? "rgba(255, 255, 255, 0.08)"
              : "",
          }}
        >
          <SortIcon sx={navIcon} />
        </IconButton>
      </Link>
      <Link href="/user">
        <IconButton
          aria-label="link to discover page"
          sx={{
            borderRadius: "0",
            backgroundColor: path.includes(
              `${process.env.NEXT_PUBLIC_URL}/user`
            )
              ? "rgba(255, 255, 255, 0.08)"
              : "",
          }}
        >
          <PersonIcon sx={navIcon} />
        </IconButton>
      </Link>
    </Box>
  );
};

export default NavBar;
