import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { mainStyle } from "./_userStyles";
import Divider from "@mui/material/Divider";
import UserMenu from "./section/UserMenu";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box component="main" sx={mainStyle}>
      <Grid container>
        <UserMenu />
        <Divider orientation="vertical" flexItem sx={{ marginRight: "1rem" }} />
        {children}
      </Grid>
    </Box>
  );
};

export default layout;
