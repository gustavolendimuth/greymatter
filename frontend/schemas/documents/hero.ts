import { BsTv } from 'react-icons/bs';

import documentType from '../objects/documentType';

export default {
  name: 'hero',
  type: 'document',
  title: 'Banner',
  preview: { select: { title: 'title' } },
  icon: BsTv,
  fields: [
    documentType('section'),
    {
      name: 'title',
      type: 'string',
      title: 'Título da Seção',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundVideo',
      title: 'Vídeo de background',
      type: 'object',
      fields: [
        {
          name: 'landscapeVideo',
          type: 'file',
          title: 'Vídeo na horizontal',
          description: 'Selecione o vídeo que será exibido na horizontal',
          options: {
            accept: 'video/mp4',
          },
        },
        {
          name: 'portraitVideo',
          type: 'file',
          title: 'Vídeo na vertical',
          description: 'Selecione o vídeo que será exibido na vertical',
          options: {
            accept: 'video/mp4',
          },
        },
      ],
    },
  ],
};