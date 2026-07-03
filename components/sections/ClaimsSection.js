import Image from "next/image";
import { PortableText } from "@portabletext/react";
export default function ClaimsSection({ data }) {
  return (
    <section className="claims_work">
      <div className="wrapper">
        <div className="claims_work_insides">
          {/* CONTENT */}
          <div className="claims_work_insides_l">
            <h2>
              {data?.title}
            </h2>
            <PortableText value={data?.description?.content} />

            {/* BUTTON */}
            {data?.buttonText && data?.buttonLink && (
              <a
                href={data?.buttonLink}
                className="btn_gray"
              >
                {data?.buttonText}
              </a>
            )}
          </div>
          {/* IMAGE */}
          <div className="claims_work_insides_r relative">
            {data?.image?.asset?.url && (
              <Image
                src={data?.image?.asset?.url}
                alt={data?.title || "Claims Section"}
                fill
                className=""
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
