import {
  defineField,
  defineType,
} from "sanity";

export default defineType({

  name: "page",

  title: "Pages",

  type: "document",

  groups: [

    {
      name: "general",
      title: "General",
    },

    {
      name: "sections",
      title: "Page Sections",
    },

    {
      name: "seo",
      title: "SEO",
    },

  ],

  fields: [

    /* ========================================
       GENERAL
    ======================================== */

    defineField({

      name: "title",

      title: "Page Title",

      type: "string",

      group: "general",

      validation: (Rule) =>
        Rule.required(),

    }),

    defineField({

      name: "slug",

      title: "Slug",

      type: "slug",

      group: "general",

      options: {

        source: "title",

        maxLength: 96,

      },

      validation: (Rule) =>
        Rule.required(),

    }),

    defineField({

      name: "pageType",

      title: "Page Type",

      type: "string",

      group: "general",

      options: {

        list: [

          {
            title: "Home",
            value: "home",
          },

          {
            title: "Default",
            value: "default",
          },

          {
            title: "Contact",
            value: "contact",
          },

        ],

        layout: "dropdown",

      },

      initialValue:
        "default",

    }),

    /* ========================================
       PAGE SECTIONS
    ======================================== */

    defineField({

      name: "sections",

      title: "Sections",

      type: "array",

      group: "sections",

      of: [

        {
          type: "heroSection",
        },

        {
          type: "whyChooseSection",
        },

        {
          type: "insuranceMattersSection",
        },

        {
          type: "insurancePlansSection",
        },

        {
          type: "midCtaSection",
        },

        {
          type: "whyChooseGridSection",
        },

        {
          type: "claimsSection",
        },

        {
          type: "richTextSection",
        },

      ],

    }),

    /* ========================================
       SEO
    ======================================== */

    defineField({

      name: "seoTitle",

      title: "SEO Title",

      type: "string",

      group: "seo",

      description:
        "Recommended: 50-60 characters",

    }),

    defineField({

      name: "seoDescription",

      title: "SEO Description",

      type: "text",

      group: "seo",

      rows: 4,

      description:
        "Recommended: 150-160 characters",

    }),

    defineField({

      name: "seoImage",

      title: "SEO Image",

      type: "image",

      group: "seo",

      options: {

        hotspot: true,

      },

    }),

    defineField({

      name: "noIndex",

      title: "Hide From Search Engines",

      type: "boolean",

      group: "seo",

      initialValue: false,

    }),

  ],

  preview: {

    select: {

      title: "title",

      subtitle: "slug.current",

    },

    prepare({
      title,
      subtitle,
    }) {

      return {

        title,

        subtitle:
          subtitle
            ? `/${subtitle}`
            : "No slug",

      };

    },

  },

});