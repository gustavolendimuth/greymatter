/* eslint-disable import/no-anonymous-default-export */
import { BsGear } from 'react-icons/bs';
import F from '../fieldsText';
import documentType from '../objects/documentType';

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site settings',
  icon: BsGear,
  fields: [
    documentType('config'),

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
      name: 'pageTitle',
      type: 'string',
      title: 'Título da Página',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: F.default.title.title,
      validation: (Rule) => Rule.required(),
      description: F.default.title.description,
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
