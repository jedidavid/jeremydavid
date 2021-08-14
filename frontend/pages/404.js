import Link from "next/link";

const Custom404 = () => {
  return (
    <main className="h-screen">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold">404</h1>
        <span className="text-2xl">Page Not Found</span>
        <Link href="/">
          <a className="bg-green-500 px-3 py-2 rounded-lg text-white my-8">
            Go back home
          </a>
        </Link>
      </div>
    </main>
  );
};

export default Custom404;
