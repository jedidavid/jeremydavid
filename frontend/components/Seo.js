import { NextSeo } from "next-seo";

const Seo = (props) => {
  return (
    <>
      <NextSeo
        title={`Jeremy David | ${props.title}`}
        description="Portfolio"
        canonical="https://jeremydavid.dev/"
        openGraph={{
          type: "website",
          url: props.link,
          title: `Jeremy David | ${props.title}`,
          description: props.desc,
          site_name: "Jeremy David",
          images: [
            {
              url: "https://admin.jeremydavid.dev/uploads/seo_ad854856cd.jpg",
              width: 700,
              height: 700,
              alt: "Logo",
            },
          ],
        }}
      />
    </>
  );
};

export default Seo;
