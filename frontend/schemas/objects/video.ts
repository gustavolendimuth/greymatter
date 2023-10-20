import { defineField, defineType } from 'sanity';

import { VideoPreview } from '../components/VideoPreview';

export default {
  name: 'video',
  type: 'object',
  title: 'Vídeo',
  components: {
    select: {
      url: 'url',
    },
    preview: VideoPreview,
  },
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Endereço',
    },
  ],
};
