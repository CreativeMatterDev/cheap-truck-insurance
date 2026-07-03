const heroSection = {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',

  fields: [

    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },

    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'richTextSection',
    },

    {
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
    },

    {
      name: 'primaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
    },

    {
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
    },

    {
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
    },

  ],
};

export default heroSection;