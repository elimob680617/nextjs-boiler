import { Button } from "@/app/_components/button";

export default async function Verify() {
  return (
    <div className=" flex justify-center items-center w-full  h-screen">
      <h1>This is verify page</h1>
      <Button variant="outlined" href="/dashboard">
        dashboard
      </Button>
    </div>
  );
}
