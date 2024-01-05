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
  const [message, setMessage] = useState("");

  const onSubmit = async (data: RegistrationSchemaType) => {
    const response = await registerAction(data);
    setMessage(response.message);
    if (response.message === "Account created successfully... signing in....") {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });
    }
  };

  return { register, handleSubmit, errors, message, onSubmit };
};

export default useRegister;
