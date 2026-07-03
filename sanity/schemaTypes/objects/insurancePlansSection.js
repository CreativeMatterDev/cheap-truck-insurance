const insurancePlansSection = {
  name: 'insurancePlansSection',
  title: 'Insurance Plans Section',
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
      name: 'plans',
      title: 'Plans',
      type: 'array',

      of: [

        {
          type: 'object',

          fields: [

            {
              name: 'planTitle',
              title: 'Plan Title',
              type: 'string',
            },

            {
              name: 'planSubtitle',
              title: 'Plan Subtitle',
              type: 'string',
            },

            {
              name: 'planDescription',
              title: 'Plan Description',
              type: 'text',
            },

            {
              name: 'features',
              title: 'Features',
              type: 'array',

              of: [
                {
                  type: 'string',
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

        },

      ],

    },

  ],
};

export default insurancePlansSection;