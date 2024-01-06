import changePasswordAction from "@/actions/changePasswordAction";
import {
  ChangePasswordSchemaType,
  changePasswordSchema,
} from "@/schema/changePasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useChangePassword = () => {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(changePasswordSchema),
  });
  const changePassword = useMutation({
    mutationFn: async ({ password, newPassword }: ChangePasswordSchemaType) =>
      changePasswordAction(password, newPassword),
    onSuccess: () => {
      reset();
    },
    onError: (error) => {
      setMessage(error.message);
    },
    onSettled: (response) => {
      setMessage(response!.message);
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    message,
    changePassword,
    setMessage,
  };
};

export default useChangePassword;
