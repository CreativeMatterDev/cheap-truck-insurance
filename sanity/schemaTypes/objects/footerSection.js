const footerSection = {
  name: 'footerSection',
  title: 'Footer Section',
  type: 'object',

  fields: [

    {
      name: 'disclaimerText',
      title: 'Disclaimer Text',
      type: 'text',
    },

    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
    },

    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',

      of: [

        {
          type: 'object',

          fields: [

            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },

            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },

          ],

        },

      ],

    },

    {
      name: 'siteCreditText',
      title: 'Site Credit Text',
      type: 'string',
    },

    {
      name: 'siteCreditLink',
      title: 'Site Credit Link',
      type: 'string',
    },

  ],

}

export default footerSection;