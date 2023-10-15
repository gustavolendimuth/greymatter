import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'heroVideo',
  title: 'Vídeo',
  type: 'object',
  fields: [
    defineField({
      name: 'landscape',
      type: 'file',
      title: 'Landscape',
      options: {
        accept: 'video/mp4',
      },
      description: 'Selecione o vídeo que será exibido na horizontal',
    }),
    defineField({
      name: 'portrait',
      type: 'file',
      title: 'Portrait',
      options: {
        accept: 'video/mp4',
      },
      description: 'Selecione o vídeo que será exibido na vertical',
    }),
  ],
});
