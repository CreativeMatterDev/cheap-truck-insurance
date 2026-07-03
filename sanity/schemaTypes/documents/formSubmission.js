const formSubmission = {

  name: "formSubmission",

  title: "Form Submissions",

  type: "document",

  fields: [

    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "submissionType",
      title: "Submission Type",
      type: "string",
    },

    {
      name: "formTitle",
      title: "Form Title",
      type: "string",
      description: "Title of the submitted form, if available.",
    },

    {
      name: "submissionData",
      title: "Submission Data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "fieldLabel", title: "Field Label", type: "string" },
            { name: "fieldValue", title: "Field Value", type: "string" },
          ],
        },
      ],
    },

    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
    },

    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },

    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },

    {
      name: "phone",
      title: "Phone",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },

    {
      name: "location",
      title: "Location",
      type: "string",
    },

    {
      name: "truckType",
      title: "Truck Type",
      type: "string",
    },

    {
      name: "numberOfTrucks",
      title: "Number Of Trucks",
      type: "number",
    },

    {
      name: "trailerType",
      title: "Trailer Type",
      type: "string",
    },

    {
      name: "radius",
      title: "Radius",
      type: "string",
    },

    {
      name: "publicLiability",
      title: "Public Liability",
      type: "string",
    },

    {
      name: "marineCargo",
      title: "Marine Cargo",
      type: "string",
    },

    {
      name: "claims",
      title: "Claims",
      type: "string",
    },

    {
      name: "drivingOffences",
      title: "Driving Offences",
      type: "string",
    },

    {
      name:
        "currentInsuranceProvider",

      title:
        "Current Insurance Provider",

      type: "string",
    },

    {
      name: "renewalDate",
      title: "Renewal Date",
      type: "date",
    },

    {
      name: "hearAboutUs",
      title: "Hear About Us",
      type: "string",
    },

  ],
  preview: {

    select: {

      title: "title",

    },

  },

};
export default formSubmission;
