/* eslint-disable import/prefer-default-export */
import { defineField } from 'sanity';

import image from './image';

export default defineField({
  name: 'postContent',
  title: 'Post Content',
  validation: (rule) => rule.required(),
  type: 'array',
  of: [{ type: 'block' }, image({ options: 'caption', title: 'Figure' }), { type: 'video' }],
});
