/* eslint-disable import/no-anonymous-default-export */
import { FaUsers } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

import documentType from '../objects/documentType';

export default defineType({
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
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título da Seção',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Texto',
    }),
    defineField({
      name: 'communityMembers',
      title: 'Comunidade',
      type: 'communityMembersFields',
      group: 'communityMembers',
    }),
    defineField({
      name: 'background',
      type: 'figure',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    }),
  ],
});
