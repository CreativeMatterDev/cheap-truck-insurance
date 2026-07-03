const whyChooseGridSection = {
  name: 'whyChooseGridSection',
  title: 'Why Choose Grid Section',
  type: 'object',

  fields: [

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },

    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    },

    {
      name: 'items',
      title: 'Grid Items',
      type: 'array',

      of: [

        {
          type: 'object',

          fields: [

            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },

            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },

          ],

        },

      ],

    },

  ],
};

export default whyChooseGridSection;