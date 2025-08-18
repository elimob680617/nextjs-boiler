import { Button } from "@/app/_components/button";

export default async function SignIn() {
  return (
    <div className=" flex justify-center items-center w-full  h-screen">
      <h1>This is sign in page</h1>
      <Button variant="outlined" href="/verify">
        verify
      </Button>
    </div>
  );
}
