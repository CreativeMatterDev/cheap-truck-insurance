import Image from "next/image";

export default function WhyChooseGridSection({ data }) {

  return (

    <section className="why_chose 6">

      <div className="wrapper">

        {/* HEADER */}

          <h2 className="titleh2">
            {data?.title}
          </h2>
          <p className="subtitlep">
            {data?.description}
          </p>
          {/* BUTTON */}
          {data?.buttonText && data?.buttonLink && (
            <a
              href={data?.buttonLink}
              className="btn_orange"
            >
              {data?.buttonText}
            </a>
          )}

        {/* GRID */}

        <div className="why_chose_grid">

          {data?.items?.map((item, index) => (

            <div
              key={index}
              className="why_chose_grid_box"
            >

              {/* ICON */}

              {item?.icon?.asset?.url && (

                <Image
                  src={item?.icon?.asset?.url}
                  alt={item?.text || "Icon"}
                  width={56}
                  height={56}
                  className=""
                />

              )}

              {/* TEXT */}

              <p className="">
                {item?.text}
              </p>
            </div>

          ))}

        </div>

      </div>

    </section>

  )

}
