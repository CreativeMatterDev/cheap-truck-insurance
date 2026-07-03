import { useState } from "react";
import FormCard from "./FormCard";
import Image from "next/image";

export default function StepFour({

  register,

  errors,

  nextStep,

  prevStep,

  settings,

}) {

  const [placeholders, setPlaceholders] = useState({
  currentInsuranceProvider: "Big Truck Insurance",
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
        settings?.stepFourTitle
      }

      description={
        settings?.stepFourDescription
      }

    >

      {/* FIELDS */}

      <div className="space-y-5">

        {/* PROVIDER */}

        <div className={`singlelabels ${errors.currentInsuranceProvider ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Current Insurance Provider*

          </label>

          <input
            type="text"
  placeholder={placeholders.currentInsuranceProvider}
  {...register("currentInsuranceProvider", {
    required: "Insurance Provider is required",
  })}
  onFocus={() => handleFocus("currentInsuranceProvider")}
  onBlur={(e) =>
    handleBlur(
      "currentInsuranceProvider",
      "Big Truck Insurance",
      e.target.value
    )
  }

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
          />

          {errors.currentInsuranceProvider && (

            <p className="text-red-500 text-sm mt-2">

              {errors.currentInsuranceProvider.message}

            </p>

          )}

        </div>

        {/* RENEWAL DATE */}

        <div className={`singlelabels ${errors.renewalDate ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Renewal Date*

          </label>

          <input

            type="date"

            {...register(
              "renewalDate",
              {

                required:
                  "Renewal Date is required",

              }
            )}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"

          />

          {errors.renewalDate && (

            <p className="text-red-500 text-sm mt-2">

              {errors.renewalDate.message}

            </p>

          )}

        </div>
        
         
        <div className="singlelabels singlelabelsdeskmob ">
          <label className="block text-[#032F35] font-bold mb-2">dummy</label>
          <input className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none" type="text" placeholder="text" />
        </div>
        <div className="singlelabels singlelabelsdeskmob ">
          <label className="block text-[#032F35] font-bold mb-2">dummy</label>
          <input className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none" type="text" placeholder="text" />
        </div>
        <div className="singlelabels singlelabelsdeskmob ">
          <label className="block text-[#032F35] font-bold mb-2">dummy</label>
          <input className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none" type="text" placeholder="text" />
        </div>
        
      </div>

      {/* BUTTONS */}

      <div className="multiformsubmits grid grid-cols-[56px_1fr_56px] gap-3 mt-8">

        {/* PREV */}

        <button
          aria-label="Go to previous step"
          onClick={prevStep}
          type="button"
          className="h-[64px] formprevbtn rounded-2xl bg-[#082C30] hover:bg-[#082C30] text-white text-3xl flex items-center justify-center"
        >
          <Image src="/images/rightarrows.svg" width={56} height={56} alt="" />
        </button>

        {/* NEXT */}

        <button

          onClick={() =>

            nextStep([

              "currentInsuranceProvider",

              "renewalDate",

            ])

          }

          type="button"

          className="h-[64px] formmidbtn rounded-2xl bg-[#032F35] hover:bg-[#05454D] transition-all duration-300 text-white font-bold text-lg"

        >

          Next

        </button>

        {/* NEXT ICON */}

        <button
          aria-label="Go to next step"
          onClick={() =>
            nextStep([
              "currentInsuranceProvider",
              "renewalDate",
            ])
          }
          type="button"
          className="h-[64px] formnextbtn rounded-2xl bg-[#032F35] hover:bg-[#05454D] transition-all duration-300 text-white text-3xl flex items-center justify-center"
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
