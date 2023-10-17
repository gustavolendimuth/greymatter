import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  icon: UserIcon,
  type: 'document',
  preview: {
    select: {
      title: 'name',
      media: 'picture',
    },
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Foto',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => rule.required(),
        },
      ],
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
});
