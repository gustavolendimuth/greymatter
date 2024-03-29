import { FaChartPie } from 'react-icons/fa';
import documentType from '../objects/documentType';

export default {
  name: 'howWeInvest',
  type: 'document',
  title: 'How We Invest',
  icon: FaChartPie,
  fields: [
    documentType('section'),
    {
      name: 'language',
      type: 'reference',
      title: 'Idioma',
      description: 'Selecione o idioma',
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
      name: 'firstCard',
      type: 'cardNoText',
      title: 'Primeiro Card',
      validation: (Rule) => Rule.required(),
      description: 'Primeiro card da seção.',
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
      type: 'backgroundSimple',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
  ],
};
