import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Works from "../components/Works";
import { fetchAPI } from "../lib/api";
import Tech from "../components/Tech";
import Reveal from "../components/Reveal";

const Home = ({ works, global, skills }) => {
  if (typeof window === "undefined") {
    return null;
  }
  const Layout = dynamic(() => import("../components/Layout"));
  return (
    <>
      <Seo title="Home" />
      <Layout global={global}>
        <div className="container mx-auto">
          <Reveal>
            <Hero />
          </Reveal>
          <Reveal>
            <Works works={works} />
          </Reveal>
          <Reveal>
            <Tech skills={skills} />
          </Reveal>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const [works, global, skills] = await Promise.all([
    fetchAPI("/works?featured=true&_limit=4"),
    fetchAPI("/global"),
    fetchAPI("/skills"),
  ]);

  return {
    props: { works, global, skills },
    revalidate: 1,
  };
}

export default Home;
