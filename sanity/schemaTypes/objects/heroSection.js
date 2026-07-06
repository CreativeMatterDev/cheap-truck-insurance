const heroSection = {
  name: "heroSection",
  title: "Hero Section",
  type: "object",

  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },

    {
      name: "backgroundType",
      title: "Background Type",
      type: "string",
      initialValue: "image",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Upload Video", value: "video" },
          { title: "YouTube / Vimeo URL", value: "embed" },
        ],
        layout: "radio",
      },
    },

    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      hidden: ({ parent }) => parent?.backgroundType !== "image",
    },

    {
      name: "backgroundVideo",
      title: "Background Video",
      type: "file",
      options: {
        accept: "video/mp4,video/webm",
      },
      hidden: ({ parent }) => parent?.backgroundType !== "video",
    },

    {
      name: "videoUrl",
      title: "YouTube / Vimeo URL",
      type: "url",
      hidden: ({ parent }) => parent?.backgroundType !== "embed",
      description:
        "Paste a YouTube or Vimeo video URL.",
    },

    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "richTextSection",
    },

    {
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
    },

    {
      name: "primaryButtonLink",
      title: "Primary Button Link",
      type: "string",
    },

    {
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
    },

    {
      name: "secondaryButtonLink",
      title: "Secondary Button Link",
      type: "string",
    },
  ],
};

export default heroSection;