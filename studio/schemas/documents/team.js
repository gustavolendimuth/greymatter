/* eslint-disable import/no-anonymous-default-export */
import { BsFillPeopleFill } from 'react-icons/bs';
import documentType from '../objects/documentType';

export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  icon: BsFillPeopleFill,
  groups: [
    {
      name: 'teamMembers',
      title: 'Team Members',
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
      name: 'teamMembers',
      title: 'Equipe',
      type: 'teamMembersObject',
      group: 'teamMembers',
    },
    {
      name: 'background',
      type: 'figure',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
  ],
};
