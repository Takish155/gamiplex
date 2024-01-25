import {
  RegistrationSchemaType,
  registrationSchema,
} from "@/schema/registrationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registerAction from "@/actions/registerAction";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export type Message = {
  message: string;
  status: number;
};

const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });
  const [message, setMessage] = useState({
    message: "",
    status: 0,
  });
  const mutation = useMutation({
    mutationFn: async (data: RegistrationSchemaType) =>
      await registerAction(data),
    onSuccess: (response) => {
      setMessage(response);
    },
    onError: (error) => {
      setMessage({
        message: error.message,
        status: 400,
      });
    },
  });

  const onSubmit = async (data: RegistrationSchemaType) => {
    mutation.mutate(data);
    if (mutation.isSuccess) {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/user",
      });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    message,
    onSubmit,
    setMessage,
    mutation,
  };
};

export default useRegister;
