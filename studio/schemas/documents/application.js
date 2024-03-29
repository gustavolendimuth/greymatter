/* eslint-disable import/no-anonymous-default-export */
import { FaClipboard } from 'react-icons/fa';
import documentType from '../objects/documentType';

export default {
  name: 'application',
  type: 'document',
  title: 'Application',
  icon: FaClipboard,
  fields: [
    documentType('section'),
    {
      name: 'language',
      type: 'reference',
      title: 'Idioma',
      validation: (Rule) => Rule.required(),
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
      name: 'image',
      type: 'image',
      title: 'Imagem',
      validation: (Rule) => Rule.required(),
      description: 'Faça upload de uma imagem, ou selecione uma da galeria',
      liveEdit: false,
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'width',
          type: 'string',
          title: 'Largura',
          description: 'Medida em pixels.',
        },
        {
          name: 'height',
          type: 'string',
          title: 'Altura',
          description: 'Medida em pixels.',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo da imagem - SEO',
          validation: (Rule) => Rule.required(),
          description: `Preencha este campo com um texto que descreva a imagem. 
          Imagens com texto alternativo ajudam no ranking dos sites de busca.`,
        },
      ],
    },
    {
      name: 'text',
      type: 'richText',
      title: 'Texto',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Texto do botão',
    },
    {
      name: 'background',
      type: 'figure',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
  ],
};
