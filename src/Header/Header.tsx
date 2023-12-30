import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DrawerMenu from "./DrawerMenu";
import NavBar from "./NavBar";
import { mainHeading, toolBarStyle } from "./_headerStyle";

const Header = () => {
  return (
    <Box component="header">
      <AppBar position="fixed">
        <Toolbar disableGutters sx={toolBarStyle}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DrawerMenu />
            <Typography variant="h5" component="h1">
              <Link href="/" style={mainHeading}>
                @Gamiplex
              </Link>
            </Typography>
            <NavBar />
          </Box>
          <Box>
            <SearchInput type="header" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
