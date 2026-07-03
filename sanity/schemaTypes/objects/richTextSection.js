const richTextSection = {
  name: 'richTextSection',
  title: 'Rich Text Section',
  type: 'object',

  fields: [

    {
      name: 'content',
      title: 'Content',
      type: 'array',

      of: [
        {
          type: 'block',
        },
      ],
    },

  ],
};

export default richTextSection;