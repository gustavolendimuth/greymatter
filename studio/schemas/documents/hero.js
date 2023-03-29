import { BsTv } from 'react-icons/bs';
import documentType from '../objects/documentType';

export default {
  name: 'hero',
  type: 'document',
  title: 'Banner',
  icon: BsTv,
  fields: [
    documentType('section'),
    {
      name: 'language',
      type: 'reference',
      title: 'Idioma',
      description: 'Selecione o idioma',
      validation: (Rule) => Rule.required(),
      to: [
        {
          type: 'language',
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Título da Seção',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'richText',
      title: 'Texto da seção',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subTitle',
      type: 'text',
      title: 'Subtítulo da seção',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Imagem',
    },
    {
      name: 'background',
      type: 'background',
      title: 'Background',
      description: 'Selecione as opções de fundo da seção.',
    },
    {
      name: 'backgroundVimeo',
      type: 'video',
      title: 'Vimeo de background',
    },
    {
      name: 'backgroundVideo',
      type: 'file',
      title: 'Vídeo de background',
    },
  ],
};
