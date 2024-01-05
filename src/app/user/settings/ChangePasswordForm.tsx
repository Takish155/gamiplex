"use client";

import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import {
  accordion,
  accordionHeading,
  buttonContainer,
  formContainer,
} from "../_userStyles";
import useChangePassword from "@/hooks/user/useChangePassword";

const ChangePasswordForm = () => {
  const { register, handleSubmit, changePassword, errors, message } =
    useChangePassword();
  return (
    <Box
      component="form"
      sx={accordion}
      onSubmit={handleSubmit((data) => {
        changePassword.mutate({
          password: data.password,
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
        });
      })}
    >
      <Typography sx={accordionHeading}>Change Password</Typography>
      <Box sx={formContainer}>
        {message && (
          <Alert
            severity={
              message === "Password changed successfully" ? "success" : "error"
            }
          >
            {message}
          </Alert>
        )}
        <TextField
          type="password"
          variant="filled"
          label="Current Password"
          {...register("password")}
          error={errors.password ? true : false}
          helperText={
            errors.password ? (errors.password.message as string) : ""
          }
        />
        <TextField
          type="password"
          variant="filled"
          label="New Password"
          {...register("newPassword")}
          error={errors.newPassword ? true : false}
          helperText={
            errors.newPassword ? (errors.newPassword.message as string) : ""
          }
        />
        <TextField
          type="password"
          variant="filled"
          label="Comfirm Password"
          {...register("confirmPassword")}
          error={errors.confirmPassword ? true : false}
          helperText={
            errors.confirmPassword
              ? (errors.confirmPassword.message as string)
              : ""
          }
        />
      </Box>
      <Box sx={buttonContainer}>
        <Button variant="contained" type="submit">
          Change Password
        </Button>
      </Box>
    </Box>
  );
};

export default ChangePasswordForm;
