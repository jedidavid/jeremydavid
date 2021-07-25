import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../lib/media";

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
            className="img-transition"
          />
        </a>
      </Link>
      <div className="py-2">
        {props.tags.map((tag, index) => (
          <span key={tag.id}>{(index ? ", " : "") + tag.name}</span>
        ))}
        <Link href={`${props.link}`}>
          <a className="cursor-pointer md:text-4xl text-3xl font-bold flex items-center base-transition text-transition">
            {props.title}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
