import { useState } from "react";
import FormCard from "./FormCard";
import Image from "next/image";


export default function StepOne({

  register,

  errors,

  nextStep,

  settings,

}) {

  const [placeholders, setPlaceholders] = useState({
  fullName: "John Trucker",
  companyName: "Big Trucks Pty Ltd",
  phone: "04",
  email: "john@bigtrucks.com.au",
});

const handleFocus = (field) => {
  setPlaceholders((prev) => ({
    ...prev,
    [field]: "",
  }));
};

const handleBlur = (field, defaultPlaceholder, value) => {
  if (!value) {
    setPlaceholders((prev) => ({
      ...prev,
      [field]: defaultPlaceholder,
    }));
  }
};

  return (

    <FormCard

      title={
        settings?.stepOneTitle
      }

      description={
        settings?.stepOneDescription
      }

    >

      {/* FIELDS */}

      <div className="space-y-5 1">

        {/* FULL NAME */}

        <div className={`singlelabels ${errors.fullName ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Full Name*

          </label>

          <input
            type="text"
            placeholder={placeholders.fullName}
  {...register("fullName", {
    required: "Full Name is required",
  })}
  onFocus={() => handleFocus("fullName")}
  onBlur={(e) =>
    handleBlur("fullName", "John Trucker", e.target.value)
  }

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
          />

          {errors.fullName && (

            <p className="text-red-500 text-sm mt-2">

              {errors.fullName.message}

            </p>

          )}

        </div>

        {/* COMPANY */}

        <div className={`singlelabels ${errors.companyName ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Company Name*

          </label>

          <input
            type="text"
            placeholder={placeholders.companyName}
  {...register("companyName", {
    required: "Company Name is required",
  })}
  onFocus={() => handleFocus("companyName")}
  onBlur={(e) =>
    handleBlur(
      "companyName",
      "Big Trucks Pty Ltd",
      e.target.value
    )
  }

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
          />

          {errors.companyName && (

            <p className="text-red-500 text-sm mt-2">

              {errors.companyName.message}

            </p>

          )}

        </div>

        {/* PHONE */}

        <div className={`singlelabels ${errors.phone ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Phone*

          </label>

          <input
            type="tel"
  placeholder={placeholders.phone}
  {...register("phone", {
    required: "Phone Number is required",
    pattern: {
      value: /^[0-9+\s()-]+$/,
      message: "Invalid phone number",
    },
  })}
  onFocus={() => handleFocus("phone")}
  onBlur={(e) => handleBlur("phone", "04", e.target.value)}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
          />

          {errors.phone && (

            <p className="text-red-500 text-sm mt-2">

              {errors.phone.message}

            </p>

          )}

        </div>

        {/* EMAIL */}

        <div className={`singlelabels ${errors.email ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Email*

          </label>

          <input
           type="email"
  placeholder={placeholders.email}
  {...register("email", {
    required: "Email Address is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Invalid email address",
    },
  })}
  onFocus={() => handleFocus("email")}
  onBlur={(e) =>
    handleBlur(
      "email",
      "john@bigtrucks.com.au",
      e.target.value
    )
  } 

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
          />

          {errors.email && (

            <p className="text-red-500 text-sm mt-2">

              {errors.email.message}

            </p>

          )}

        </div>

        {/* LOCATION */}

        <div className={`singlelabels ${errors.location ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Location*

          </label>

          <select

            {...register(
              "location",
              {

                required:
                  "Location is required",

              }
            )}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"

          >

            <option value="">

              Please Select

            </option>

            {settings?.locationOptions?.map(
              (item) => (

                <option
                  key={item}
                  value={item}
                >

                  {item}

                </option>

              )
            )}

          </select>

          {errors.location && (

            <p className="text-red-500 text-sm mt-2">

              {errors.location.message}

            </p>

          )}

        </div>

      </div>

      {/* BUTTONS */}

      <div className="multiformsubmits grid grid-cols-[56px_1fr_56px] gap-3 mt-8">

        {/* EMPTY */}

        <div className="h-[64px] rounded-2xl bg-[#A7B6B8] flex items-center justify-center"><Image src="/images/leftarrowslight.svg" width={24} height={24} alt="" /></div>

        {/* NEXT */}

        <button

          onClick={() =>

            nextStep([

              "fullName",

              "companyName",

              "phone",

              "email",

              "location",

            ])

          }

          type="button"

          className="formmidbtn h-[64px] rounded-2xl bg-[#032F35] hover:bg-[#05454D] transition-all duration-300 text-white font-bold text-lg"

        >

          Next

        </button>

        {/* NEXT ICON */}

        <button

          onClick={() =>

            nextStep([

              "fullName",

              "companyName",

              "phone",

              "email",

              "location",

            ])

          }

          type="button"

          className="formnextbtn h-[64px] rounded-2xl bg-[#082C30] hover:bg-[#082C30] transition-all duration-300 text-white text-3xl flex items-center justify-center"

        aria-label="Go to next step"
        >
          <Image src="/images/rightarrows.svg" width={56} height={56} alt="" />
        </button>

      </div>

      {/* SUPPORT */}

      <p className="formfooter text-center text-[#032F35] text-sm mt-8">

        {settings?.supportText}{" "}

        <strong>

          <a href={`tel:${settings?.supportPhone}`}>

            {settings?.supportPhone}

          </a>

        </strong>

      </p>

    </FormCard>

  )

}
