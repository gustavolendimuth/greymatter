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
      name: 'alt',
      type: 'string',
      validation: (rule) => rule.required(),
      title: 'Texto Alternativo',
      description: 'Importante para SEO e acessibilidade.',
    }),
    defineField({
      name: 'caption',
      type: 'internationalizedArrayString',
      title: 'Legenda',
    }),
  ],
});
