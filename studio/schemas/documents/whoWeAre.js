/* eslint-disable import/no-anonymous-default-export */
import { FaQuestion } from 'react-icons/fa';
import documentType from '../objects/documentType';

export default {
  name: 'whoWeAre',
  type: 'document',
  title: 'Who we are',
  icon: FaQuestion,
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
    },
    {
      name: 'text',
      type: 'richText',
      title: 'Texto da seção',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Imagem da seção',
    },
    {
      name: 'background',
      type: 'figure',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
  ],
};
