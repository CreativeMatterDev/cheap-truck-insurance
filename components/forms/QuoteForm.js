"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import FormLayout from "./FormLayout";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

import SuccessMessage from "./SuccessMessage";

export default function QuoteForm({

  settings,

  siteSettings,

}) {

  const [step, setStep] =
    useState(1);

  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  const [turnstileToken, setTurnstileToken] =
  useState("");

  const {

    register,

    handleSubmit,

    trigger,

    formState: { errors },

  } = useForm();

  /* NEXT STEP */

  const nextStep = async (
    fields
  ) => {

    const output =
      await trigger(fields);

    if (!output) return;

    setStep((prev) => prev + 1);

  };

  /* PREVIOUS STEP */

  const prevStep = () => {

    setStep((prev) => prev - 1);

  };

  /* FINAL SUBMIT */

  const onSubmit = async (
    data
  ) => {

    try {

      setLoading(true);

      setSubmitError("");

      const response =
        await fetch(
          "/api/quote-form",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body:
              JSON.stringify({
                ...data,
                turnstileToken,
              }),
          }
        );

      const result =
        await response.json();

      if (!response.ok || !result?.success) {
        const message = result?.error || "Something went wrong. Please try again.";
        setSubmitError(message);
        return;
      }

      setSubmitted(true);

    } catch (error) {

      console.error(error);

      setSubmitError(

        "Submission failed. Please try again."

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <FormLayout siteSettings={siteSettings} submitted={submitted}>

      {/* SUCCESS */}

      {submitted && (

        <SuccessMessage 
          settings={settings}
        />

      )}

      {/* STEP 1 */}

      {!submitted && step === 1 && (

        <StepOne
  register={register}
  errors={errors}
  nextStep={nextStep}
  settings={settings}
/>

      )}

      {/* STEP 2 */}

      {!submitted && step === 2 && (

        <StepTwo
          register={register}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
          settings={settings}
        />

      )}

      {/* STEP 3 */}

      {!submitted && step === 3 && (

        <StepThree
          register={register}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
          settings={settings}
        />

      )}

      {/* STEP 4 */}

      {!submitted && step === 4 && (

        <StepFour
          register={register}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
          settings={settings}
        />

      )}

      {/* STEP 5 */}

      {!submitted && step === 5 && (

        // <StepFive

        //   register={register}

        //   errors={errors}

        //   prevStep={prevStep}
        //   settings={settings}

        //   handleSubmit={handleSubmit}

        //   onSubmit={onSubmit}

        //   loading={loading}

        //   submitError={submitError}

        // />

        <StepFive
  register={register}
  errors={errors}
  prevStep={prevStep}
  handleSubmit={handleSubmit}
  onSubmit={onSubmit}
  loading={loading}
  submitError={submitError}
  settings={settings}
  turnstileToken={turnstileToken}
  setTurnstileToken={setTurnstileToken}
/>

      )}

    </FormLayout>

  )

}
