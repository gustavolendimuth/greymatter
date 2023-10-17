/* eslint-disable import/no-anonymous-default-export */
import { FaUsers } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import sectionText from 'schemas/objects/sectionText';
import sectionTitle from 'schemas/objects/sectionTitle';

import backgroundImage from '../objects/backgroundImage';
import documentType from '../objects/documentType';

export default defineType({
  name: 'community',
  type: 'document',
  title: 'Community',
  preview: {
    prepare() {
      return { title: 'Community Section' };
    },
  },
  icon: FaUsers,
  groups: [
    { name: 'communityMembers', title: 'Membros da Comunidade' },
  ],
  fields: [
    documentType('section'),
    sectionTitle,
    sectionText,
    defineField({
      name: 'community',
      type: 'object',
      title: 'Comunidade',
      group: 'communityMembers',
      fields: [
        defineField({
          type: 'array',
          name: 'members',
          title: 'Membros',
          validation: (rule) => rule.required(),
          of: [
            {
              type: 'reference',
              to: [{ type: 'communityMembers' }],
            },
          ],
        }),
        defineField({
          title: 'Ordem de Exibição',
          name: 'sort',
          type: 'string',
          initialValue: '["custom"]',
          description: `Escolha a ordem que será exibida no site. Esta ordem é válida para 
        a página inicial e para a página de biografia dos membros da comunidade.`,
          options: {
            list: [
              { title: 'Personalizada', value: '["custom"]' },
              { title: 'Nome', value: '["name"]' },
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
        }),
      ],
    }),
    backgroundImage(),
  ],
});
