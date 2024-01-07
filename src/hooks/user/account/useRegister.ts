import {
  RegistrationSchemaType,
  registrationSchema,
} from "@/schema/registrationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registerAction from "@/actions/registerAction";
import { signIn } from "next-auth/react";
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: RegistrationSchemaType) => {
    setIsLoading(true);
    const response = await registerAction(data);
    setMessage({
      message: response.message,
      status: response.status,
    });
    if (response.status === 200) {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/user",
      });
    } else {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    message,
    onSubmit,
    isLoading,
    setMessage,
  };
};

export default useRegister;
