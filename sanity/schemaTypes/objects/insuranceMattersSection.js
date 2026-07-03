const insuranceMattersSection = {
  name: 'insuranceMattersSection',
  title: 'Insurance Matters Section',
  type: 'object',

  fields: [

    {
      name: 'image',
      title: 'Image',
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

export default insuranceMattersSection;