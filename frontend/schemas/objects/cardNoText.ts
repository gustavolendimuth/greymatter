export default {
  name: 'cardNoText',
  type: 'object',
  title: 'Card da seção',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nome do card',
    },
    {
      name: 'cardImage',
      type: 'figure',
      title: 'Imagem do card',
      description: 'Formatos permitidos são: webp, jpg, png, gif. Tamanho máximo de 152px de largura ou altura.',
    },
  ],
};
