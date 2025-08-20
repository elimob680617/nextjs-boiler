export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <div className=" flex flex-col container item-center self-stretch max-w-lg h-100 dark:bg-base-200 xl:p-8 rounded-lg shadow-lg xl:shadow-black/5 m-auto">
        <section className="w-full">{children}</section>
      </div>
    </div>
  );
}
