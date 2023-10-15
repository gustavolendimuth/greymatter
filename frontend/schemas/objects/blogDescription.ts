/* eslint-disable import/prefer-default-export */
import { defineArrayMember, defineField } from 'sanity';

export default defineField({
  name: 'blogDescription',
  description: 'Usado para SEO e para o subtítulo do blog.',
  title: 'Descrição do Blog',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      options: {},
      styles: [],
      lists: [],
      marks: {
        decorators: [],
        annotations: [
          defineField({
            type: 'object',
            name: 'link',
            fields: [
              {
                type: 'string',
                name: 'href',
                title: 'URL',
                validation: (rule) => rule.required(),
              },
            ],
          }),
        ],
      },
    }),
  ],
  validation: (rule) => rule.max(155).required(),
});
