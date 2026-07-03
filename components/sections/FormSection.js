"use client";

import { useState } from "react";

export default function FormSection({ data }) {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [formData, setFormData] =
    useState({});

  const handleChange = (
    name,
    value
  ) => {

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const submissionData =
        data?.form?.formFields?.map(
          (field) => ({
            fieldLabel: field?.label,
            fieldValue:
              formData[field?.name] || "",
          })
        );

      const response = await fetch(
        "/api/forms",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            formTitle:
              data?.form?.title,

            submissionData,

          }),

        }
      );

      const result =
        await response.json();

      if (result?.success) {

        setSuccess(true);

        setFormData({});

      }

    } catch (error) {

      console.error(error);

    }

    setLoading(false);

  };

  if (success) {

    return (

      <section className="bg-[#032F35] py-24">

        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">

          <h2 className="text-yellow-400 text-5xl font-black mb-6">

            Success

          </h2>

          <p className="text-white text-xl">

            {data?.form?.successMessage}

          </p>

        </div>

      </section>

    )

  }

  return (

    <section className="bg-[#032F35] py-24">

      <div className="max-w-4xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">

          <h2 className="text-yellow-400 text-5xl lg:text-7xl font-black uppercase leading-none mb-8">

            {data?.title}

          </h2>

          <p className="text-white/80 text-xl leading-relaxed">

            {data?.description}

          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-yellow-400/20 rounded-3xl p-10"
        >

          <div className="grid gap-6">

            {data?.form?.formFields?.map(
              (field, index) => (

                <div key={index}>

                  <label htmlFor={field?.name} className="block text-white mb-3 font-semibold">
                    {field?.label}
                  </label>

                  {field?.type ===
                  "textarea" ? (

                    <textarea
                      id={field?.name}
                      rows={5}
                      required={
                        field?.required
                      }
                      placeholder={
                        field?.placeholder
                      }
                      value={
                        formData[
                          field?.name
                        ] || ""
                      }
                      onChange={(e) =>
                        handleChange(
                          field?.name,
                          e.target.value
                        )
                      }
                      className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white"
                    />

                  ) : field?.type ===
                    "select" ? (

                    <select
                      id={field?.name}
                      required={
                        field?.required
                      }
                      value={
                        formData[
                          field?.name
                        ] || ""
                      }
                      onChange={(e) =>
                        handleChange(
                          field?.name,
                          e.target.value
                        )
                      }
                      className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white"
                    >

                      <option value="">
                        Select
                      </option>

                      {field?.options?.map(
                        (
                          option,
                          i
                        ) => (

                          <option
                            key={i}
                            value={option}
                          >

                            {option}

                          </option>

                        )
                      )}

                    </select>

                  ) : (

                    <input
                      id={field?.name}
                      type={field?.type}
                      required={
                        field?.required
                      }
                      placeholder={
                        field?.placeholder
                      }
                      value={
                        formData[
                          field?.name
                        ] || ""
                      }
                      onChange={(e) =>
                        handleChange(
                          field?.name,
                          e.target.value
                        )
                      }
                      className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 text-white"
                    />

                  )}

                </div>

              )
            )}

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-5 rounded-2xl transition-all duration-300"
          >

            {loading
              ? "Submitting..."
              : data?.form
                  ?.submitButtonText}

          </button>

        </form>

      </div>

    </section>

  )

}