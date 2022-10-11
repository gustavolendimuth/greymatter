export default {
  name: 'card',
  type: 'object',
  title: 'Cards da seção',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nome do card',
    },
    {
      name: 'cardTitle',
      type: 'string',
      title: 'Título do card',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Imagem do card',
      description: 'Formatos permitidos são: webp, jpg, png, gif. Tamanho máximo de 152px de largura ou altura.',
    },
    {
      name: 'text',
      type: 'richText',
      title: 'Texto do card',
    },
  ],
};
