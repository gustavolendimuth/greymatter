/* eslint-disable import/no-anonymous-default-export */
import { FaUsers } from 'react-icons/fa';
import F from '../fieldsText';
import type from '../objects/type';

export default {
  name: 'community',
  type: 'document',
  title: 'Community',
  icon: FaUsers,
  groups: [
    {
      name: 'communityMembers',
      title: 'Community Members',
    },
  ],
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
      validation: (Rule) => Rule.required(),
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
      name: 'image',
      type: 'figure',
      title: 'Imagem',
    },
    {
      name: 'text',
      type: 'richText',
      title: 'Texto',
    },
    {
      name: 'communityMembers',
      title: 'Comunidade',
      type: 'communityMembersObject',
      group: 'communityMembers',
    },
    {
      name: 'background',
      type: 'figure',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
  ],
};
