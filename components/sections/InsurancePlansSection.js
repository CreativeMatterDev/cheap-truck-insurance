import Image from "next/image";

export default function InsurancePlansSection({ data }) {

  return (

    <section className="pay_onlye 2">

      <div className="wrapper">
        {/* HEADER */}
          <h2 className="titleh2">
            {data?.title}
          </h2>
          <p className="subtitlep">
            {data?.description}
          </p>

        {/* PLANS */}

        <div className="pay_sec_grid">
          {data?.plans?.map((plan, index) => (
            <div
              key={index}
              className="pay_sec_grid_box"
            >
              {/* PLAN TITLE */}
              <h3>
                {plan?.planTitle}
              </h3>
              {/* SUBTITLE */}
              <p><b>{plan?.planSubtitle}</b></p>
              {/* DESCRIPTION */}
              <p>
                {plan?.planDescription}
              </p>

              {/* FEATURES */}
              <ul className="">
                {plan?.features?.map((item, i) => (
                  <li
                    key={i}
                    className=""
                  ><Image src="/images/check-circle-filled-dark.svg" width={24}
                        height={24} alt=""/><span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* BUTTON */}
              <div className="pay_sec_span">
              {plan?.buttonText && plan?.buttonLink && (
                <a
                  href={plan?.buttonLink}
                  className="btn_orange"
                >
                  {plan?.buttonText}
                </a>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
