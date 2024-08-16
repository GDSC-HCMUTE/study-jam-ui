"use client";

import { signIn } from "@/actions/auth-action";
import CustomButton from "@/components/CustomButton/CustomButton";
import TextInput from "@/components/TextInput/TextInput";
import useSubmitFunction from "@/hooks/useSubmitFunction";
import { SignInSchema, SignInSchemaType } from "@/common/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { notification } from "antd";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

const SignInForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SignInSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
    mode: "all",
  });
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message: string, description: string) => {
    api.error({
      message,
      description,
      placement: "bottomRight",
      showProgress: true,
      pauseOnHover: false,
    });
  };

  const { isLoading, callSubmission } = useSubmitFunction(
    signIn,
    (error) =>
      openNotification(
        "Authentication failed",
        error.message ?? "Please try again!"
      ),
    () =>
      openNotification(
        "Authentication failed",
        "An error occurred while processing authentication. Please try again!"
      )
  );

  const handleSignIn = handleSubmit((data) => {
    callSubmission(data);
  });

  return (
    <div className="w-4/5 flex flex-col gap-5">
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onBlur, onChange } }) => (
          <TextInput
            label="Email"
            isRequired
            showHelperText={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { value, onBlur, onChange } }) => (
          <TextInput
            label="Password"
            isRequired
            isPasswordField
            showHelperText={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
      />
      <div className="mt-2 flex flex-col gap-2">
        <CustomButton
          label="Sign in"
          type="primary"
          isLoading={isLoading}
          isDisabled={!isValid}
          onClick={handleSignIn}
        />
        <Link className="text-blue hover:brightness-75" href={"/"}>
          Back to Home
        </Link>
      </div>
      {contextHolder}
    </div>
  );
};

export default SignInForm;
