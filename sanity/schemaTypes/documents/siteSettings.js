export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "headerLogo",
      title: "Header Logo",
      type: "image",
    },

    {
      name: "headerButtonText",
      title: "Header Button Text",
      type: "string",
    },

    {
      name: "contactHeaderLogo",
      title: "Contact Header Logo",
      type: "image",
    },
    {
      name: "headerButtonLink",
      title: "Header Button Link",
      type: "string",
    },

    {
      name: "finalCta",
      title: "Final CTA",
      type: "finalCtaSection",
    },

    {
      name: "footerSection",
      title: "Footer",
      type: "footerSection",
    },

    {
      name: "globalSettings",
      title: "Global Settings",
      type: "globalSettings",
    },
  ],
};
