import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteGameList from "./section/FavoriteGameList";
import { favoriteGameHeading, favoriteGameSection } from "./_userStyles";
import { Metadata } from "next";

const page = async () => {
  return (
    <Grid item xs={12} md={8.5}>
      <Box sx={favoriteGameSection}>
        <Typography variant="h5" sx={favoriteGameHeading} component="h2">
          Favorite Games
        </Typography>
        <FavoriteGameList />
      </Box>
    </Grid>
  );
};

export default page;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "User | Gamiplex",
    description: "User profile page, where you can see your favorite games.",
  };
}
