/* eslint-disable import/no-anonymous-default-export */
import { FaIdCard } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import image from 'schemas/objects/image';
import { fullValidation } from 'schemas/utils/internationalizedArrayUtils';

import { preview } from '../utils/internationalizedArrayUtils';

export default defineType({
  name: 'communityMembers',
  type: 'document',
  title: 'Community Members',
  icon: FaIdCard,
  preview: {
    select: { title: 'name', media: 'image', subtitle: 'position' },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle: preview(subtitle),
      };
    },
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nome',
      description: 'Nome do membro da comunidade',
      validation: (rule) => rule.required(),
    }),
    image({ title: 'Foto' }),
    defineField({
      name: 'position',
      type: 'internationalizedArrayString',
      title: 'Posição',
      validation: (rule) => fullValidation({ rule, title: 'Posição', languages }),
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'Linkedin',
    }),
  ],
});
