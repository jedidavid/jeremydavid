import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../lib/media";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Card = (props) => {
  return (
    <div>
      <Link href={`${props.link}`}>
        <a>
          <Image
            src={getStrapiMedia(props.imgUrl)}
            alt={props.imgAlt}
            width={900}
            height={600}
            layout="responsive"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(900, 600)
            )}`}
            className="img-transition"
          />
        </a>
      </Link>
      <div className="py-2">
        {props.tags.map((tag, index) => (
          <span key={tag.id}>{(index ? ", " : "") + tag.name}</span>
        ))}
        <Link href={`${props.link}`}>
          <a className="cursor-pointer md:text-4xl sm:text-3xl text-2xl font-bold flex items-center base-transition text-transition">
            {props.title}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
