/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'fields',
  type: 'object',
  title: 'Campos do formulário',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nome do campo',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Tipo do campo',
      options: {
        list: [
          { title: 'Texto curto', value: '' },
        ],
      },
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Imagem do card',
    },
    {
      name: 'text',
      type: 'richText',
      title: 'Texto do card',
    },
  ],
};
