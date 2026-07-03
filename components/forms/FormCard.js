export default function FormCard({

  title,

  description,

  children,

}) {

  return (

    <div className="multiformsec bg-[#F3F3F3] rounded-[40px] w-full max-w-[700px] px-10 py-12 shadow-lg">

      {/* TITLE */}

      <h2>
        {title}
      </h2>

      {/* DESCRIPTION */}

      {description && (

        <p className="formtagp">
          {description}
        </p>

      )}

      {/* CONTENT */}

      <div className="multiformstart">

        {children}

      </div>

    </div>

  )

}
