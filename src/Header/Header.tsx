import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DrawerMenu from "./DrawerMenu";

const mainHeading: React.CSSProperties = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.5rem",
  textDecoration: "underline",
};

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {<DrawerMenu /> && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ marginRight: "1rem" }}
            >
              <DrawerMenu />
            </IconButton>
          )}
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            <Link href="/" style={mainHeading}>
              @Gamiplex
            </Link>
          </Typography>
          <SearchInput type="header" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
