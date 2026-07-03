import {
  defineField,
  defineType,
} from "sanity";

export default defineType({

  name: "formSettings",

  title: "Form Settings",

  type: "document",

  groups: [

    {
      name: "general",
      title: "General",
    },

    {
      name: "steps",
      title: "Step Content",
    },

    {
      name: "options",
      title: "Dropdown Options",
    },

    {
      name: "emails",
      title: "Email Settings",
    },

    {
      name: "success",
      title: "Success Message",
    },

  ],

  fields: [

    /* ========================================
       GENERAL
    ======================================== */

    defineField({

      name: "supportPhone",

      title: "Support Phone",

      type: "string",

      group: "general",

    }),

    defineField({

      name: "supportText",

      title: "Support Text",

      type: "text",

      group: "general",

    }),

    defineField({

      name: "privacyPolicyText",

      title: "Privacy Policy Text",

      type: "text",

      group: "general",

    }),

    /* ========================================
       STEP 1
    ======================================== */

    defineField({

      name: "stepOneTitle",

      title: "Step One Title",

      type: "string",

      group: "steps",

      initialValue:
        "CONTACT INFORMATION",

    }),

    defineField({

      name: "stepOneDescription",

      title: "Step One Description",

      type: "text",

      group: "steps",

    }),

    /* ========================================
       STEP 2
    ======================================== */

    defineField({

      name: "stepTwoTitle",

      title: "Step Two Title",

      type: "string",

      group: "steps",

      initialValue:
        "BUSINESS & OPERATIONS",

    }),

    defineField({

      name: "stepTwoDescription",

      title: "Step Two Description",

      type: "text",

      group: "steps",

    }),

    /* ========================================
       STEP 3
    ======================================== */

    defineField({

      name: "stepThreeTitle",

      title: "Step Three Title",

      type: "string",

      group: "steps",

      initialValue:
        "COVERAGE & RISK",

    }),

    defineField({

      name: "stepThreeDescription",

      title: "Step Three Description",

      type: "text",

      group: "steps",

    }),

    /* ========================================
       STEP 4
    ======================================== */

    defineField({

      name: "stepFourTitle",

      title: "Step Four Title",

      type: "string",

      group: "steps",

      initialValue:
        "CURRENT INSURANCE",

    }),

    defineField({

      name: "stepFourDescription",

      title: "Step Four Description",

      type: "text",

      group: "steps",

    }),

    /* ========================================
       STEP 5
    ======================================== */

    defineField({

      name: "stepFiveTitle",

      title: "Step Five Title",

      type: "string",

      group: "steps",

      initialValue:
        "ONE LAST QUESTION",

    }),

    defineField({

      name: "stepFiveDescription",

      title: "Step Five Description",

      type: "text",

      group: "steps",

    }),

    defineField({

      name: "stepFiveDisclaimer",

      title: "Step Five Disclaimer",

      type: "text",

      group: "steps",

    }),

    /* ========================================
       EMAIL SETTINGS
    ======================================== */

    defineField({

      name: "adminEmail",

      title: "Admin Notification Email",

      type: "string",

      group: "emails",

    }),

    defineField({

      name: "adminEmailSubject",

      title: "Admin Email Subject",

      type: "string",

      group: "emails",

      initialValue:
        "New Truck Insurance Quote Request",

    }),

    defineField({

      name: "customerEmailSubject",

      title: "Customer Email Subject",

      type: "string",

      group: "emails",

      initialValue:
        "Thanks for contacting Cheap Truck Insurance",

    }),

    defineField({

      name: "adminEmailTemplate",

      title: "Admin Email Template",

      type: "text",

      group: "emails",

      description:
        "Use placeholders like {{fullName}}, {{email}}, {{phone}}",

    }),

    defineField({

      name: "customerEmailTemplate",

      title: "Customer Email Template",

      type: "text",

      group: "emails",

      description:
        "Use placeholders like {{fullName}}",

    }),

    /* ========================================
       SUCCESS MESSAGE
    ======================================== */

    defineField({

      name: "thankYouTitle",

      title: "Thank You Title",

      type: "string",

      group: "success",

      initialValue:
        "THANK YOU!",

    }),

    defineField({

      name: "thankYouMessage",

      title: "Thank You Message",

      type: "text",

      group: "success",

    }),

    /* ========================================
       DROPDOWN OPTIONS
    ======================================== */

    defineField({

      name: "locationOptions",

      title: "Location Options",

      type: "array",

      group: "options",

      of: [

        {

          type: "string",

        },

      ],

    }),

    defineField({

      name: "truckTypes",

      title: "Truck Types",

      type: "array",

      group: "options",

      of: [

        {

          type: "string",

        },

      ],

    }),

    defineField({

      name: "trailerTypes",

      title: "Trailer Types",

      type: "array",

      group: "options",

      of: [

        {

          type: "string",

        },

      ],

    }),

    defineField({

      name: "radiusOptions",

      title: "Radius Options",

      type: "array",

      group: "options",

      of: [

        {

          type: "string",

        },

      ],

    }),

    defineField({

      name: "yesNoOptions",

      title: "Yes / No Options",

      type: "array",

      group: "options",

      of: [

        {

          type: "string",

        },

      ],

    }),

    defineField({

      name: "hearAboutOptions",

      title: "Hear About Us Options",

      type: "array",

      group: "options",

      of: [

        {

          type: "string",

        },

      ],

    }),

  ],

  preview: {

    prepare() {

      return {

        title:
          "Form Settings",

      };

    },

  },

});