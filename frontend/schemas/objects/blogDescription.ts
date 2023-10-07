/* eslint-disable import/prefer-default-export */
import { defineArrayMember, defineField } from 'sanity';

export const blogDescription = defineField({
  name: 'blogDescription',
  description: 'Used both for the <meta> description tag for SEO, and the blog subheader.',
  title: 'Blog Description',
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
