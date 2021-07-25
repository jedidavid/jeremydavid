import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import Card from "../components/Card";
import { fetchAPI } from "../lib/api";

const Works = ({ works, global }) => {
  const Layout = dynamic(() => import("../components/Layout"));

  return (
    <>
      <Seo title="Projects" />
      <Layout global={global}>
        <div className="container mx-auto"></div>
        <div className="container mx-auto py-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            {works.map((work) => (
              <Card
                slug={work.slug}
                imgUrl={work.image}
                imgAlt={work.image.alt}
                title={work.title}
                link={work.link}
                github={work.github}
                tags={work.tags}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
export async function getStaticProps() {
  const [works, global] = await Promise.all([
    fetchAPI("/works"),
    fetchAPI("/global"),
  ]);

  return {
    props: { works, global },
    revalidate: 1,
  };
}

export default Works;
