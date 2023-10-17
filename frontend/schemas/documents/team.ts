/* eslint-disable import/no-anonymous-default-export */
import { BsFillPeopleFill } from 'react-icons/bs';
import { defineField, defineType } from 'sanity';
import backgroundImage from 'schemas/objects/backgroundImage';
import sectionTitle from 'schemas/objects/sectionTitle';

import documentType from '../objects/documentType';

export default defineType({
  name: 'team',
  type: 'document',
  title: 'Team',
  icon: BsFillPeopleFill,
  preview: {
    prepare() {
      return { title: 'Team Section' };
    },
  },
  groups: [
    {
      name: 'teamMembers',
      title: 'Membros da equipe',
    },
  ],
  fields: [
    documentType('section'),
    sectionTitle,
    defineField({
      type: 'object',
      name: 'team',
      title: 'Equipe',
      group: 'teamMembers',
      fields: [
        defineField({
          type: 'array',
          name: 'members',
          title: 'Membros',
          validation: (rule) => rule.required(),
          of: [
            {
              type: 'reference',
              to: [{ type: 'teamMembers' }],
            },
          ],
        }),
        defineField({
          title: 'Ordem de Exibição',
          name: 'sort',
          type: 'string',
          initialValue: '["custom"]',
          description: `Escolha a ordem que será exibida no site. Esta ordem é válida para 
        a página inicial e para a página de biografia dos membros da equipe`,
          options: {
            list: [
              { title: 'Personalizada', value: '["custom"]' },
              { title: 'Nome', value: '["name"]' },
              { title: 'Cargo', value: '["position"]' },
              { title: 'Nome e Cargo', value: '["name", "position"]' },
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
        }),
      ],
    }),
    backgroundImage({ options: ['larger', 'align'] }),
  ],
});
