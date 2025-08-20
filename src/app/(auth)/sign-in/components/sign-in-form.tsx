import React from "react";
import { Button } from "@/app/_components/button";

const SignInForm = () => {
  return (
    <div className="w-full">
      <h5 className="text-md font-semibold  text-white">ورود | ثبت نام</h5>
      <form className="flex flex-col gap-6 mt-6">
        <Button type="submit" variant="filled">
          تایید و دریافت کد
        </Button>
      </form>
    </div>
  );
};
export default SignInForm;
