import image from './image';

export default {
  name: 'richText',
  type: 'array',
  title: 'Texto',
  of: [
    { type: 'block' },
    image(),
    { type: 'video' },
  ],
};
