import { FaChartPie } from 'react-icons/fa';
import F from '../fieldsText';
import type from '../objects/type';

export default {
  name: 'howWeInvest',
  type: 'document',
  title: 'How We Invest',
  icon: FaChartPie,
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
      name: 'cardsBackground',
      type: 'backgroundSimple',
      title: 'Cards Background',
      description: 'Selecione as opções de fundo do card.',
    },
    {
      name: 'firstCard',
      type: 'simpleCard',
      title: 'Primeiro Card',
      validation: (Rule) => Rule.required(),
      description: 'Primeiro card da seção.',
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards da seção',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'simpleCard' }],
    },
    {
      name: 'background',
      type: 'backgroundSimple',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
  ],
};