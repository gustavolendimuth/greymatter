/* eslint-disable import/prefer-default-export */
import { defineField } from 'sanity';

export const postContent = defineField({
  name: 'postContent',
  title: 'Post Content',
  validation: (rule) => rule.required(),
  type: 'array',
  of: [
    { type: 'block' },
    {
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Image caption',
          description: 'Caption displayed below the image.',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
  ],
});
