import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'image',
  type: 'image',
  title: 'Imagem',
  validation: (Rule) => Rule.required(),
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'imagePortrait',
      type: 'image',
      title: 'Imagem mobile',
      description: 'Selecione somente quando necessário mostrar uma imagem diferente em telas menores.',
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
