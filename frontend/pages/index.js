import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";

const Home = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const Layout = dynamic(() => import("../components/Layout"));
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <div className="container mx-auto">
          <Hero />
        </div>
      </Layout>
    </>
  );
};

export default Home;
