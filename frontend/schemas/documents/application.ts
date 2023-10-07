/* eslint-disable import/no-anonymous-default-export */
import { FaClipboard } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import { preview, validation } from 'schemas/utils/internationalizedArrayUtils';

import documentType from '../objects/documentType';

export default defineType({
  name: 'application',
  type: 'document',
  title: 'Application',
  icon: FaClipboard,
  preview: {
    select: {
      fieldArray: 'title',
    },
    prepare(selection) {
      return preview({ selection, title: 'Application Section' });
    },
  },
  fields: [
    defineField(documentType('section')),
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
      title: 'Título da Seção',
      validation: (Rule) => validation({ Rule, name: 'título da seção', languages }),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagem',
      validation: (Rule) => Rule.required(),
      description: 'Faça upload de uma imagem, ou selecione uma da galeria',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'width',
          type: 'string',
          title: 'Largura',
          description: 'Medida em pixels.',
        },
        {
          name: 'height',
          type: 'string',
          title: 'Altura',
          description: 'Medida em pixels.',
        },
        {
          name: 'alt',
          type: 'internationalizedArrayString',
          title: 'Texto alternativo da imagem - SEO',
          validation: (Rule) => validation({ Rule, name: 'Texto alternativo da imagem', languages }),
          description: `Preencha este campo com um texto que descreva a imagem. 
          Imagens com texto alternativo ajudam no ranking dos sites de busca.`,
        },
      ],
    }),
    defineField({
      name: 'text',
      type: 'internationalizedArrayRichText',
      title: 'Texto',
      validation: (Rule) => validation({ Rule, name: 'Texto', languages }),
    }),
    defineField({
      name: 'buttonText',
      type: 'internationalizedArrayString',
      title: 'Texto do botão',
      validation: (Rule) => validation({ Rule, name: 'Texto do botão', languages }),
    }),
    defineField({
      name: 'background',
      type: 'background',
      title: 'Background da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    }),
  ],
});
