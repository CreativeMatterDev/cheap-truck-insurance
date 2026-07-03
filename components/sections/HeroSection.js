import Image from "next/image";
import { PortableText } from "@portabletext/react";
export default function HeroSection({ data }) {
  return (
    <section
      className="hero_banner"
      style={{
        backgroundImage: data?.backgroundImage?.asset?.url
          ? `url(${data.backgroundImage.asset.url})`
          : undefined,
      }}
    >
      {/* CONTENT */}

      <div className="hero_insides">
        {/* LOGO */}
        {data?.logo?.asset?.url && (
          <Image
            src={data?.logo?.asset?.url}
            alt="Cheap Truck Insurance"
            width={208}
            height={80}
            priority
            className="headlogo"
          />
        )}
        {/* TITLE */}
        <hr></hr>
        <h1>{data?.title}</h1>
        {/* DESCRIPTION */}
        <PortableText value={data?.description?.content} />
        {/* BUTTONS */}
        <div className="btntwoone">
          <a href={data?.primaryButtonLink} className="btn_orange">
            {data?.primaryButtonText}
          </a>
          <a href={data?.secondaryButtonLink} className="telno">
            {data?.secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
