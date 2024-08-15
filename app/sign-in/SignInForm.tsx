"use client";

import CustomButton from "@/components/CustomButton/CustomButton";
import TextInput from "@/components/TextInput/TextInput";
import { SignInSchema, SignInSchemaType } from "@/validations/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

const SignInForm = () => {
  const {
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
  } = useForm<SignInSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
    mode: "all",
  });

  const handleSignIn = handleSubmit((data) => {
    console.log(data);
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
          isLoading={isSubmitting}
          isDisabled={!isValid}
          onClick={handleSignIn}
        />
        <Link className="text-blue hover:brightness-75" href={"/"}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
