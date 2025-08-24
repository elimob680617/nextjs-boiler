"use client";
import React from "react";
import { Button } from "@/app/_components/button";
import { Textbox } from "@/app/_components/textbox";
import { useForm } from "react-hook-form";
import { SignInType } from "@/app/(auth)/sign-in/types/sign-in.type";

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
    <div className="w-full">
      <h5 className="text-md font-semibold  text-white">ورود | ثبت نام</h5>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-6"
      >
        <Textbox
          {...register("mobile", {
            required: "لطفا شماره موبایل را وارد کنید.",
          })}
          placeholder="شماره موبایل"
        />
        <Button type="submit" variant="filled">
          تایید و دریافت کد
        </Button>
      </form>
    </div>
  );
};
export default SignInForm;
