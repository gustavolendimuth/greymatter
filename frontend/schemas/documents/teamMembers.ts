/* eslint-disable import/no-anonymous-default-export */

import { FaAddressCard } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import { fullValidation } from 'schemas/utils/internationalizedArrayUtils';

import image from '../objects/image';

export default defineType({
  name: 'teamMembers',
  type: 'document',
  title: 'Team Members',
  icon: FaAddressCard,
  preview: {
    select: { title: 'name', media: 'image', subtitle: 'position' },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle,
      };
    },
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nome',
      description: 'Nome do membro da equipe',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    image({ title: 'Foto' }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Posição',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'Linkedin',
    }),
    defineField({
      name: 'bio',
      type: 'internationalizedArrayRichText',
      title: 'Bio',
      validation: (rule) => fullValidation({ rule, title: 'Bio', languages }),
    }),
  ],
});
