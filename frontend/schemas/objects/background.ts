import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'background',
  type: 'object',
  title: 'background',
  fields: [
    defineField({
      name: 'color',
      title: 'Cor de fundo',
      type: 'color',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagem',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
      options: {
        hotspot: true,
      },
    }),
  ],
});
