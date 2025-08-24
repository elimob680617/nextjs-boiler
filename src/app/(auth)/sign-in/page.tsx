import { Suspense } from "react";
import SignInForm from "@/app/(auth)/sign-in/components/sign-in-form";

export default async function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
