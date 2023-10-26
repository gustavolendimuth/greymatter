import { MdBusiness } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

import { languages } from '@/sanity.config';

import backgroundImage from '../objects/backgroundImage';
import image from '../objects/image';
import { fullValidation } from '../utils/internationalizedArrayUtils';

export default defineType({
  type: 'document',
  name: 'portfolio',
  title: 'Portfolio',
  icon: MdBusiness,
  preview: {
    prepare: () => ({ title: 'Portfolio' }),
  },
  groups: [{ name: 'empresas', title: 'Empresas' }],
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'companies',
      type: 'array',
      title: 'Empresas',
      icon: MdBusiness,
      group: 'empresas',
      of: [
        defineField({
          type: 'object',
          name: 'company',
          title: 'Empresa',
          preview: {
            select: {
              title: 'name',
              subtitle: 'categories',
            },
            prepare: ({ title, subtitle }) => ({
              title: title,
              subtitle: subtitle?.join(', '),
              media: MdBusiness,
            }),
          },
          fields: [
            defineField({
              type: 'string',
              name: 'name',
              title: 'Empresa',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'exit',
              type: 'boolean',
              title: 'Exit',
              initialValue: false,
            }),
            defineField({
              name: 'categories',
              type: 'categories',
              title: 'Categorias',
              validation: (rule) => rule.required(),
              // validation: (rule) =>
              //   fullValidation({ rule, title: 'Categorias', languages: languages }),
            }),
            defineField({
              type: 'internationalizedArrayString',
              name: 'description',
              title: 'Descrição',
              validation: (rule) => fullValidation({ rule, title: 'Descrição', languages }),
            }),
            defineField({
              type: 'internationalizedArrayBlockText',
              name: 'text',
              title: 'Texto',
              validation: (rule) => fullValidation({ rule, title: 'Texto', languages }),
            }),
            image({
              options: ['brighten', 'orientation'],
              title: 'Logo',
              name: 'logo',
              description: 'A imagem do logo deve ter o fundo transparente',
            }),
          ],
        }),
      ],
    }),
    backgroundImage(),
  ],
});
