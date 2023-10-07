/* eslint-disable import/no-anonymous-default-export */
import { CogIcon } from '@sanity/icons';

import documentType from '../objects/documentType';

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site settings',
  preview: { select: { title: 'title' } },
  icon: CogIcon,
  fields: [
    documentType('config'),
    {
      name: 'title',
      type: 'string',
      title: 'Título da Página',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrição do site',
      validation: (Rule) => Rule.required(),
      description: 'Descrição do site para SEO, sites de busca e redes sociais',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Palavras-chave',
      description: `Palavras-chave para SEO. Adicione palavras-chave que 
        descrevam o site. Aperte a tecla enter a cada nova palavra-chave`,
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};
