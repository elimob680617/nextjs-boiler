import { Button } from "@/app/_components/button";

export default function Home() {
  return (
    <>
      <div className="bg-primary text-primary-content">Next js Boiler</div>
      <div className="container">
        <Button variant="info" size="large" shape="wide" animatedIcon={true}>
          ثبت نام
        </Button>
      </div>
    </>
  );
}
