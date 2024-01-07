"use client";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  accordion,
  accordionHeading,
  buttonContainer,
  formContainer,
} from "../_userStyles";
import useChangePassword from "@/hooks/user/account/useChangePassword";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    changePassword,
    errors,
    message,
    setMessage,
  } = useChangePassword();
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
        {message.message && (
          <Alert
            onClose={() =>
              setMessage({
                status: 200,
                message: "",
              })
            }
            severity={message.status === 200 ? "success" : "error"}
          >
            {message.message}
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
        {changePassword.isPending ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" type="submit">
            Change Password
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ChangePasswordForm;
