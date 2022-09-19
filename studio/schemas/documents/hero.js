/* eslint-disable import/no-anonymous-default-export */
import { BsTv } from 'react-icons/bs';
import F from '../fieldsText';
import type from '../objects/type';

export default {
  name: 'hero',
  type: 'document',
  title: 'Banner',
  icon: BsTv,
  fields: [
    type('section'),
    {
      name: 'preview',
      type: 'preview',
      title: F.default.preview.title,
    },
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
      name: 'pageTitle',
      type: 'string',
      title: 'Título da Seção',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: F.default.title.title,
      validation: (Rule) => Rule.required(),
      description: F.default.title.description,
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
      type: 'figure',
      title: 'Imagem de fundo',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
    {
      name: 'videoBackground',
      type: 'video',
      title: 'Vimeo de background',
    },
    {
      name: 'videoUpload',
      type: 'file',
      title: 'Vídeo de background',
    },
  ],
};
