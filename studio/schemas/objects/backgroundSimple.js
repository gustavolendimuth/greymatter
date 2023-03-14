export default {
  name: 'backgroundSimple',
  type: 'object',
  title: 'Simple Background',
  fields: [
    {
      name: 'color',
      title: 'Cor de fundo',
      type: 'color',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
      liveEdit: false,
      options: {
        hotspot: true,
      },
    },
  ],
};
