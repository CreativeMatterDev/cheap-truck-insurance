const whyChooseSection = {
  name: 'whyChooseSection',
  title: 'Why Choose Section',
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
      type: 'richTextSection',
    },

    {
      name: 'features',
      title: 'Features',
      type: 'array',

      of: [

        {
          type: 'object',

          fields: [

            {
              name: 'text',
              title: 'Feature Text',
              type: 'string',
            },

          ],

        },

      ],

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

  ],
};

export default whyChooseSection;