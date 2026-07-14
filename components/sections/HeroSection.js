import Image from "next/image";
import { PortableText } from "@portabletext/react";

function getEmbedUrl(url) {
  if (!url) return "";

  // YouTube
  if (url.includes("youtube.com/watch?v=")) {
    const id = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&playsinline=1`;
  }

  // youtu.be
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&playsinline=1`;
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

      <pre
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 99999,
    background: "white",
    color: "black",
    fontSize: "12px",
    maxWidth: "500px",
  }}
>
  {JSON.stringify(
    {
      backgroundType: data?.backgroundType,
      videoUrl: data?.videoUrl,
      backgroundVideo: data?.backgroundVideo,
    },
    null,
    2
  )}
</pre>
      {/* Uploaded Video */}

      {data?.backgroundType === "video" &&
        data?.backgroundVideo?.asset?.url && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              zIndex: 0,
            }}
          >
            <source
              src={data.backgroundVideo.asset.url}
              type="video/mp4"
            />
          </video>
        )}

      {/* YouTube / Vimeo */}

      {data?.backgroundType === "embed" &&
        data?.videoUrl && (
          <iframe
            src={getEmbedUrl(data.videoUrl)}
            title="Hero Background Video"
            allow="autoplay; fullscreen"
            allowFullScreen
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