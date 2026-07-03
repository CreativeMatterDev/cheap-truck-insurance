import Image from "next/image";

export default function MidCtaSection({ data }) {

  return (

    <section
      className="truck_bg"
      style={{
        backgroundImage: data?.backgroundImage?.asset?.url
          ? `url(${data.backgroundImage.asset.url})`
          : undefined,
      }}
    >

      
      {/* CONTENT */}

        <h2>
          {data?.title}
        </h2>

        {/* BUTTON */}

        {data?.buttonText && data?.buttonLink && (

          <a
            href={data?.buttonLink}
            className="btn_orange"
          >
            {data?.buttonText}
          </a>
        )}
    </section>

  )

}
