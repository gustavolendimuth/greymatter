import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'figure',
  type: 'object',
  title: 'Figure',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagem',
      validation: (rule) => rule.required(),
      description: 'Faça upload de uma imagem, ou selecione uma da galeria',
      options: {
        hotspot: true,
      },
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
