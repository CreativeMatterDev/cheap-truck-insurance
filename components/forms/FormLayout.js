import Image from "next/image";
export default function FormLayout({ children, siteSettings, submitted }) {
  return (
    <section className="min-h-screen min-h-screen-multiform bg-[#E5BE17] flex flex-col justify-between px-6 py-10">
      {/* TOP */}

      <div>
        {/* LOGO */}

        <div className="flex justify-center mb-14 largescrens">
          {siteSettings?.contactHeaderLogo?.asset?.url && (
            <Image
              src={siteSettings.contactHeaderLogo.asset.url}
              alt="Logo"
              width={220}
              height={80}
              className="h-auto"
              priority
            />
          )}
        </div>

        {/* FORM */}
        
        <div className="formall flex justify-center">
          {submitted && (
          <div className="fromsuccess-img">
            <Image
              src="images/form_success.svg"
              alt="Logo"
              width={330}
              height={152}
              className=""
            />
          </div>
          )}
          {children}
        </div>
        
      </div>
    </section>
  );
}
