import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { settingSection } from "../_userStyles";
import UpdatePersonalInfoForm from "./UpdatePersonalInfoForm";
import ChangePasswordForm from "./ChangePasswordForm";

const SettingSection = () => {
  return (
    <Grid item xs={12} md={8.5}>
      <Box sx={settingSection}>
        <UpdatePersonalInfoForm />
        <ChangePasswordForm />
      </Box>
    </Grid>
  );
};

export default SettingSection;
