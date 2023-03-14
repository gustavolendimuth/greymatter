export default {
  name: 'figureBackground',
  type: 'object',
  title: 'Figure',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Imagem',
      validation: (Rule) => Rule.required(),
      description: 'Faça upload de uma imagem, ou selecione uma da galeria',
      liveEdit: false,
      options: {
        hotspot: true,
      },
    },
  ],
};
