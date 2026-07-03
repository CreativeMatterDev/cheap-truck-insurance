export default function Footer({

  data,

  isContactPage,

}) {

  return (

    <div className="footer_copy">
      <div className="wrapper">
        {/* DISCLAIMER */}
        <p>{data?.disclaimerText}</p>

        {/* FOOTER LINKS */}
        <ul>
          {data?.copyrightText && (
            <li>{data?.copyrightText}</li>
          )}

          {data?.footerLinks?.map((item, index) => (
            <li key={index}>
              <a href={item?.link} className="">
                {item?.title}
              </a>
            </li>
          ))}

          {data?.siteCreditText && (
            <li>
              <a
                href={data?.siteCreditLink} target="_blank"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                {data?.siteCreditText}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>

  )

}
