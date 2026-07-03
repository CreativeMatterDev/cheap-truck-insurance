import FormCard from "./FormCard";
import Image from "next/image";
import Link from "next/link";
import Turnstile from "react-turnstile";

export default function StepFive({
  register,

  errors,

  prevStep,

  handleSubmit,

  onSubmit,

  loading,

  submitError,

  settings,

  turnstileToken,
  setTurnstileToken,
}) {
  return (
    <FormCard
      title={settings?.stepFiveTitle}
      description={settings?.stepFiveDescription}
    >
      {/* FIELD */}

      <div className={`singlelabels ${errors.hearAboutUs ? "error" : ""}`}>
        <label className="block text-[#032F35] font-bold mb-2">
          How did you hear about us?*
        </label>

        <select
          {...register("hearAboutUs", {
            required: "Please select an option",
          })}
          className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
        >
          <option value="">Please Select</option>

          {settings?.hearAboutOptions?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {errors.hearAboutUs && (
          <p className="text-red-500 text-sm mt-2">
            {errors.hearAboutUs.message}
          </p>
        )}
      </div>

      <div className="singlelabels singlelabelsdeskmob ">
        <label className="block text-[#032F35] font-bold mb-2">dummy</label>
        <input
          className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
          type="text"
          placeholder="text"
        />
      </div>
      <div className="singlelabels singlelabelsdeskmob ">
        <label className="block text-[#032F35] font-bold mb-2">dummy</label>
        <input
          className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
          type="text"
          placeholder="text"
        />
      </div>
      <div className="singlelabels singlelabelsdeskmob ">
        <label className="block text-[#032F35] font-bold mb-2">dummy</label>
        <input
          className="w-full h-[64px] rounded-2xl border border-[#D7D7D7] bg-white px-5 text-lg outline-none"
          type="text"
          placeholder="text"
        />
      </div>
      <div className="singlelabels singlelabelsdeskmob ">
        <Turnstile
          sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          size="invisible"
          onVerify={(token) => {
            console.log("TOKEN:", token);
            setTurnstileToken(token);
          }}
          onExpire={() => {
            setTurnstileToken("");
          }}
          onError={(error) => {
            console.log("Turnstile Error", error);
            setTurnstileToken("");
          }}
        />
      </div>
      <div className="singlelabels singlelabelsdeskmob singlelabelsdeskmobtext ">
        <p>
          By submitting this form, you agree to our{" "}
          <strong>
            <Link href="/privacy-policy">Privacy Policy.</Link>
          </strong>
        </p>
      </div>

      {/* ERROR */}

      {submitError && (
        <p className="text-red-500 text-center mt-6">{submitError}</p>
      )}

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

        {/* SUBMIT */}

        <button
          onClick={handleSubmit(onSubmit)}
          type="button"
          disabled={loading || !turnstileToken}
          className="h-[64px] formmidbtn rounded-2xl bg-[#032F35] hover:bg-[#05454D] transition-all duration-300 text-white font-bold text-lg disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* ICON */}
        <button
          aria-label="Submit form"
          onClick={handleSubmit(onSubmit)}
          type="button"
          disabled={loading || !turnstileToken}
          className="h-[64px] formnextbtn rounded-2xl bg-[#032F35] hover:bg-[#05454D] text-3xl flex items-center justify-center disabled:opacity-50"
        >
          <Image src="/images/rightarrows.svg" width={56} height={56} alt="" />
        </button>
      </div>

      {/* DISCLAIMER */}

      <p className="formfooter text-center text-[#032F35] text-sm mt-8 leading-relaxed">
        {settings?.supportText}{" "}
        <strong>
          <a href={`tel:${settings?.supportPhone}`}>{settings?.supportPhone}</a>
        </strong>
      </p>
    </FormCard>
  );
}
