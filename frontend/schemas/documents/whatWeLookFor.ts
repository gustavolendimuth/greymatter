/* eslint-disable import/no-anonymous-default-export */
import { FaSearch } from 'react-icons/fa';

import documentType from '../objects/documentType';

export default {
  name: 'whatWeLookFor',
  type: 'document',
  title: 'What we look for',
  preview: { select: { title: 'title' } },
  icon: FaSearch,
  fields: [
    documentType('section'),
    {
      name: 'title',
      type: 'string',
      title: 'Título da Seção',
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards da seção',
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
