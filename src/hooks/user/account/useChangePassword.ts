import changePasswordAction from "@/actions/changePasswordAction";
import {
  ChangePasswordSchemaType,
  changePasswordSchema,
} from "@/schema/changePasswordSchema";
import { ActionMessage } from "@/types/actionMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useChangePassword = () => {
  const [message, setMessage] = useState<ActionMessage>({
    message: "",
    status: 200,
  });

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
    onSettled: (response) => {
      setMessage({
        message: response?.message!,
        status: response?.status!,
      });
      if (response?.status === 200) {
        reset();
      }
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
