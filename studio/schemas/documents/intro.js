import { FiHome } from 'react-icons/fi';
import documentType from '../objects/documentType';

export default {
  name: 'intro',
  type: 'document',
  title: 'Intro',
  icon: FiHome,
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
    }
  ],
};