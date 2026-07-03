const globalSettings = {
  name: "globalSettings",
  title: "Global Settings",
  type: "object",

  fields: [
    {
      name: "ga4Id",
      title: "GA4 Measurement ID",
      type: "string",
    },

    {
      name: "metaPixelId",
      title: "Meta Pixel ID",
      type: "string",
    },

    {
      name: "headerScripts",
      title: "Custom Header Scripts",
      type: "text",
    },

    {
      name: "bodyScripts",
      title: "Custom Body Scripts",
      type: "text",
    },
  ],
};

export default globalSettings;
