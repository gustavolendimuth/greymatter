/* eslint-disable import/no-anonymous-default-export */
import { FaLandmark } from 'react-icons/fa';

import documentType from '../objects/documentType';

export default {
  name: 'whatDoWeOffer',
  type: 'document',
  title: 'What do we offer',
  preview: { select: { title: 'title' } },
  icon: FaLandmark,
  fields: [
    documentType('section'),
    {
      name: 'title',
      type: 'string',
      title: 'Título da Seção',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards da seção',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'card' }],
    },
    {
      name: 'background',
      type: 'figure',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
  ],
};
