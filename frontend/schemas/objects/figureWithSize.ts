import { defineField } from 'sanity';

export default defineField({
  name: 'image',
  type: 'image',
  title: 'Imagem',
  validation: (rule) => rule.required(),
  description: 'Faça upload de uma imagem, ou selecione uma da galeria',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'width',
      type: 'string',
      title: 'Largura',
      description: 'Medida em pixels.',
    }),
    defineField({
      name: 'height',
      type: 'string',
      title: 'Altura',
      description: 'Medida em pixels.',
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Texto Alternativo',
      validation: (rule) => rule.required(),
      description: 'Importante para SEO e acessibilidade.',
    }),
  ],
});
