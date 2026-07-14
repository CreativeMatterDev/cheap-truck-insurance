import Image from "next/image";
import { PortableText } from "@portabletext/react";

function getEmbedUrl(url) {
  if (!url) return "";

  // YouTube
  if (url.includes("youtube.com/watch?v=")) {
    const id = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&playsinline=1`;
  }

  // youtu.be
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&playsinline=1`;
  }

  // Vimeo
  if (url.includes("vimeo.com/")) {
    const id = url.split("/").pop();
    return `https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&muted=1`;
  }

  return url;
}

export default function HeroSection({ data }) {
  return (
    <section
      className="hero_banner"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          data?.backgroundType === "image" &&
          data?.backgroundImage?.asset?.url
            ? `url(${data.backgroundImage.asset.url})`
            : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Uploaded Video */}

      {data?.backgroundType === "video" &&
        data?.backgroundVideo?.asset?.url && (
          <video
            src={data.backgroundVideo.asset.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              zIndex: 0,
            }}
          />
        )}

      {/* YouTube / Vimeo */}

      {data?.backgroundType === "embed" &&
        data?.videoUrl && (
          <iframe
            src={getEmbedUrl(data.videoUrl)}
            title="Hero Background Video"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="eager"
            frameBorder="0"
            className="absolute inset-0 w-full h-full"
            style={{
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        )}

      {/* CONTENT */}

      <div
        className="hero_insides"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LOGO */}

        {data?.logo?.asset?.url && (
          <Image
            src={data.logo.asset.url}
            alt="Cheap Truck Insurance"
            width={208}
            height={80}
            priority
            className="headlogo"
          />
        )}

        <hr />

        {/* TITLE */}

        <h1>{data?.title}</h1>

        {/* DESCRIPTION */}

        <PortableText value={data?.description?.content} />

        {/* BUTTONS */}

        <div className="btntwoone">
          <a
            href={data?.primaryButtonLink}
            className="btn_orange"
          >
            {data?.primaryButtonText}
          </a>

          <a
            href={data?.secondaryButtonLink}
            className="telno"
          >
            {data?.secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}