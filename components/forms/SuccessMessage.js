import FormCard from "./FormCard";

export default function SuccessMessage({

  settings,

}) {

  return (

    <FormCard

      title={
        settings?.thankYouTitle
      }

    >

      {/* MESSAGE */}

      <p className="successtext text-[#032F35] text-2xl leading-relaxed text-center">

        {settings?.thankYouMessage}

      </p>

    </FormCard>

  )

}
