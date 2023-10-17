import { PiVideoFill } from 'react-icons/pi';
import { defineType } from 'sanity';

import documentType from '../objects/documentType';

export default defineType({
  name: 'hero',
  type: 'document',
  title: 'Banner',
  icon: PiVideoFill,
  preview: {
    prepare() {
      return { title: 'Banner Section' };
    },
  },
  fields: [
    documentType('section'),
    {
      name: 'video',
      type: 'internationalizedArrayHeroVideo',
      title: 'Background Vídeo',
    },
  ],
});
