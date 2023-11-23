import { defineField, defineType } from 'sanity';

import { VideoPreview } from '../components/VideoPreview';

export default defineType({
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Endereço',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    //@ts-ignore
    preview: VideoPreview,
  },
});
