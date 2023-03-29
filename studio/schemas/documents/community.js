/* eslint-disable import/no-anonymous-default-export */
import { FaUsers } from 'react-icons/fa';
import documentType from '../objects/documentType';

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
