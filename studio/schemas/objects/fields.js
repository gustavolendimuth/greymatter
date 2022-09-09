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
      title: 'Título do card',
      options: {

      }
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
