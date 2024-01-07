import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { settingSection } from "../_userStyles";
import UpdatePersonalInfoForm from "./UpdatePersonalInfoForm";
import ChangePasswordForm from "./ChangePasswordForm";
import { Metadata } from "next";

const SettingSection = () => {
  return (
    <Grid item xs={12} md={8.5}>
      <Box sx={settingSection}>
        <ChangePasswordForm />
        <UpdatePersonalInfoForm />
      </Box>
    </Grid>
  );
};

export default SettingSection;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Settings | Gamiplex",
    description:
      "User settings page, where you can update your personal info and change password.",
  };
}
