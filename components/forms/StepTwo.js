import { useState } from "react";
import FormCard from "./FormCard";
import Image from "next/image";

export default function StepTwo({

  register,

  errors,

  nextStep,

  prevStep,

  settings,

}) {


  const [placeholders, setPlaceholders] = useState({
  numberOfTrucks: "0",
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
        settings?.stepTwoTitle
      }

      description={
        settings?.stepTwoDescription
      }

    >

      {/* FIELDS */}

      <div className="space-y-5 2">

        {/* TRUCK TYPE */}

        <div className={`singlelabels ${errors.truckType ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Truck Type*

          </label>

          <select

            {...register(
              "truckType",
              {

                required:
                  "Truck Type is required",

              }
            )}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"

          >

            <option value="">

              Please Select

            </option>

            {settings?.truckTypes?.map(
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

          {errors.truckType && (

            <p className="text-red-500 text-sm mt-2">

              {errors.truckType.message}

            </p>

          )}

        </div>

        {/* NUMBER OF TRUCKS */}

        <div className={`singlelabels ${errors.numberOfTrucks ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Number of Trucks*

          </label>

          <input
            type="number"
  placeholder={placeholders.numberOfTrucks}
  {...register("numberOfTrucks", {
    required: "Number of Trucks is required",
    valueAsNumber: true,
    min: {
      value: 1,
      message: "Minimum 1 truck required",
    },
  })}
  onFocus={() => handleFocus("numberOfTrucks")}
  onBlur={(e) =>
    handleBlur("numberOfTrucks", "0", e.target.value)
  }

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
          />

          {errors.numberOfTrucks && (

            <p className="text-red-500 text-sm mt-2">

              {errors.numberOfTrucks.message}

            </p>

          )}

        </div>

        {/* TRAILER TYPE */}

        <div className={`singlelabels ${errors.trailerType ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Trailer Type*

          </label>

          <select

            {...register(
              "trailerType",
              {

                required:
                  "Trailer Type is required",

              }
            )}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"

          >

            <option value="">

              Please Select

            </option>

            {settings?.trailerTypes?.map(
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

          {errors.trailerType && (

            <p className="text-red-500 text-sm mt-2">

              {errors.trailerType.message}

            </p>

          )}

        </div>

        {/* RADIUS */}

        <div className={`singlelabels ${errors.radius ? "error" : ""}`}>

          <label className="block text-[#032F35] font-bold mb-2">

            Radius of Operations*

          </label>

          <select

            {...register(
              "radius",
              {

                required:
                  "Radius of Operations is required",

              }
            )}

            className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"

          >

            <option value="">

              Please Select

            </option>

            {settings?.radiusOptions?.map(
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

          {errors.radius && (

            <p className="text-red-500 text-sm mt-2">

              {errors.radius.message}

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

              "truckType",

              "numberOfTrucks",

              "trailerType",

              "radius",

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
              "truckType",
              "numberOfTrucks",
              "trailerType",
              "radius",
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
