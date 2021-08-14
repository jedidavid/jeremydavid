import Card from "../components/Card";
import Link from "next/link";

const Works = ({ works }) => {
  return (
    <div>
      <p className="sm:text-2xl text-xl font-medium mb-6">Featured Works</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-16 gap-8">
        {works.map((work) => (
          <div className="" key={work.id}>
            <Card
              slug={work.slug}
              imgUrl={work.image}
              imgAlt={work.image.alternativeText || work.title}
              title={work.title}
              link={work.link}
              github={work.github}
              tags={work.tags}
            />
          </div>
        ))}
      </div>
      <div className="text-right">
        <Link href="works">
          <a className="sm:text-2xl text-xl font-medium base-transition text-transition">
            &#8594; More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Works;
