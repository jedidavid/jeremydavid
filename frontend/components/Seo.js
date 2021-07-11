import { NextSeo } from "next-seo";

const Seo = (props) => {
  return (
    <>
      <NextSeo
        title={`Jeremy David | ${props.title}`}
        description="Portfolio"
        canonical="https://www.jeremydavid.dev/"
        openGraph={{
          url: props.link,
          title: `Jeremy David | ${props.title}`,
          description: props.desc,
          site_name: "Jeremy David",
        }}
      />
    </>
  );
};

export default Seo;
