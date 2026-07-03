import Image from "next/image";
import { PortableText } from "@portabletext/react";
export default function InsuranceMattersSection({ data }) {
  return (
    <section className="insurance_matters 1">
      <div className="wrapper">
        <div className="insurance_matters_inside">
          {/* IMAGE */}
          <div className="insurance_matters_l relative">
            {data?.image?.asset?.url && (
              <Image
                src={data?.image?.asset?.url}
                alt={data?.title || "Insurance Matters"}
                fill
              />
            )}
          </div>

          {/* CONTENT */}

          <div className="insurance_matters_r">
            <h2>{data?.title}</h2>
            <PortableText value={data?.description?.content} />
            {/* BUTTON */}
            {data?.buttonText && data?.buttonLink && (
              <a href={data?.buttonLink} className="btn_gray">
                {data?.buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
