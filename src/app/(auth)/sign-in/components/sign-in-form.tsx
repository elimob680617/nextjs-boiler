"use client";
import React from "react";
import { Button } from "@/app/_components/button";
import { useForm } from "react-hook-form";
import { SignInType } from "@/app/(auth)/sign-in/types/sign-in.type";
import { TextInput } from "@/app/_components/form-input/text-input/text-input";
import { Textbox } from "@/app/_components/textbox";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="">
      <h5 className="text-md font-semibold  text-primary">ورود | ثبت نام</h5>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-6"
      >
        <TextInput<SignInType>
          variant="filled"
          register={register}
          name="mobile"
          rules={{
            required: "لطفا شماره موبایل را وارد کنید.",
            maxLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد.",
            },
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد.",
            },
          }}
          errors={errors}
        />
        <Button type="submit" variant="filled">
          تایید و دریافت کد
        </Button>
      </form>
    </div>
  );
};
export default SignInForm;
