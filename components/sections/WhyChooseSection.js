import Image from "next/image";
import { PortableText } from "@portabletext/react";
export default function WhyChooseSection({ data }) {

  return (

    <section className="truck_insurance 7">

      <div className="">

        {/* HEADER */}

          <h2 className="">
            {data?.title}
          </h2>

          <PortableText value={data?.description?.content} />


        {/* FEATURES */}

        <ul>

          {data?.features?.map((item, index) => (

            <li
              key={index}
              className="">
              <Image src="/images/check-circle-filled.svg" width={24}
            height={24} alt="" />{item?.text}
            </li>

          ))}

        </ul>

        {/* BUTTON */}

        {data?.buttonText && data?.buttonLink && (
          <a
            href={data?.buttonLink}
            className="btn_orange"
          >
            {data?.buttonText}
          </a>
        )}

      </div>

    </section>

  )

}
