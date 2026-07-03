import Image from "next/image";

export default function FinalCTA({ data }) {

  return (

    <section className="footer">


      <div className="wrapper">
      <hr className="foohr"></hr>
      <div
        className="truck_bg truck_bg_footer"
        style={{
          backgroundImage: data?.backgroundImage?.asset?.url
            ? `url(${data.backgroundImage.asset.url})`
            : undefined,
        }}
      >
        <h2 className="">
          {data?.title}
        </h2>
        <p className="">
          {data?.description}
        </p>
        <div className="btn_grps">
          {/* PRIMARY BUTTON */}
          <a
            href={data?.primaryButtonLink}
            className="btn_orange"
          >
            {data?.primaryButtonText}
          </a>

          {/* SECONDARY BUTTON */}
          <a
            href={data?.secondaryButtonLink}
            className="btn_orange"
          >
            {data?.secondaryButtonText}
          </a>
        </div>
      </div>
      </div>

    </section>

  )

}
