import FormCard from "./FormCard";
import Image from "next/image";

export default function StepThree({

  register,

  errors,

  nextStep,

  prevStep,

  settings,

}) {

  return (

    <FormCard

      title={
        settings?.stepThreeTitle
      }

      description={
        settings?.stepThreeDescription
      }

    >

      {/* FIELDS */}

      <div className="space-y-5">

        {/* PUBLIC LIABILITY */}

        <div className={`singlelabels ${errors.publicLiability ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Do you need Public Liability Insurance?*

          </label>

          <select

            {...register(
              "publicLiability",
              {

                required:
                  "Please select an option",

              }
            )}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"

          >

            <option value="">

              Please Select

            </option>

            {settings?.yesNoOptions?.map(
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

          {errors.publicLiability && (

            <p className="text-red-500 text-sm mt-2">

              {errors.publicLiability.message}

            </p>

          )}

        </div>

        {/* MARINE CARGO */}

        <div className={`singlelabels ${errors.marineCargo ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Do you need Marine Cargo Insurance?*

          </label>

          <select

            {...register(
              "marineCargo",
              {

                required:
                  "Please select an option",

              }
            )}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"

          >

            <option value="">

              Please Select

            </option>

            {settings?.yesNoOptions?.map(
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

          {errors.marineCargo && (

            <p className="text-red-500 text-sm mt-2">

              {errors.marineCargo.message}

            </p>

          )}

        </div>

        {/* CLAIMS */}

        <div className={`singlelabels ${errors.claims ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Any Claims in the last 5 Years?*

          </label>

          <select

            {...register(
              "claims",
              {

                required:
                  "Please select an option",

              }
            )}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"

          >

            <option value="">

              Please Select

            </option>

            {settings?.yesNoOptions?.map(
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

          {errors.claims && (

            <p className="text-red-500 text-sm mt-2">

              {errors.claims.message}

            </p>

          )}

        </div>

        {/* DRIVING OFFENCES */}

        <div className={`singlelabels ${errors.drivingOffences ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Any Driving Offences in the last 5 Years?*

          </label>

          <select

            {...register(
              "drivingOffences",
              {

                required:
                  "Please select an option",

              }
            )}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"

          >

            <option value="">

              Please Select

            </option>

            {settings?.yesNoOptions?.map(
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

          {errors.drivingOffences && (

            <p className="text-red-500 text-sm mt-2">

              {errors.drivingOffences.message}

            </p>

          )}

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

              "publicLiability",

              "marineCargo",

              "claims",

              "drivingOffences",

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
              "publicLiability",
              "marineCargo",
              "claims",
              "drivingOffences",
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
