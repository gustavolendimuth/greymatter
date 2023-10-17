/* eslint-disable import/no-anonymous-default-export */
import { CogIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import OpenGraphInput from 'schemas/components/OpenGraphInput';
import image from 'schemas/objects/image';
import { fullValidation } from 'schemas/utils/internationalizedArrayUtils';

import documentType from '../objects/documentType';

const title = 'Título do Site';

export default defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site settings',
  preview: {
    select: {
      fieldArray: 'title',
    },
    prepare() {
      return { title: 'Site Settings' };
    },
  },
  icon: CogIcon,
  fields: [
    documentType('config'),
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
      title,
      validation: (rule) => fullValidation({ rule, title, languages }),
    }),
    image({ title: 'Logo', name: 'logo' }),
    defineField({
      name: 'description',
      type: 'internationalizedArrayText',
      title: 'Descrição do Site',
      description: 'Descrição do site para SEO, sites de busca e redes sociais.',
      validation: (rule) => fullValidation({ rule, title: 'Descrição do Site', languages }),
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      title: 'Palavras-chave',
      validation: (rule) => rule.required(),
      description: `Palavras-chave para SEO. Adicione palavras-chave que 
        descrevam o site em todas as linguas. Aperte a tecla enter a cada nova palavra-chave.`,
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      description: 'Usado para pré-visualização em redes sociais.',
      type: 'object',
      validation: (rule) => rule.required(),
      components: {
        input: OpenGraphInput as any,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
      ],
    }),
  ],
});
