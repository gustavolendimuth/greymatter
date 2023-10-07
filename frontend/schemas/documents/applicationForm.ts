/* eslint-disable import/no-anonymous-default-export */
import { FaClipboardList } from 'react-icons/fa';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import { preview, validation } from 'schemas/utils/internationalizedArrayUtils';

import documentType from '../objects/documentType';

export default defineType({
  name: 'applicationForm',
  type: 'document',
  title: 'Application Form',
  icon: FaClipboardList,
  groups: [
    {
      name: 'formFields',
      title: 'Campos do Formulário',
    },
  ],
  preview: {
    select: {
      fieldArray: 'title',
    },
    prepare(selection) {
      return preview({ selection, title: 'Application Form' });
    },
  },
  fields: [
    defineField(documentType('page')),
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
      title: 'Título da Seção',
      validation: (Rule) => validation({ Rule, name: 'Título da Seção', languages }),
    }),
    defineField({
      name: 'text',
      type: 'internationalizedArrayRichText',
      title: 'Texto',
      validation: (Rule) => validation({ Rule, name: 'Texto', languages }),
    }),
    defineField({
      name: 'background',
      type: 'background',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    }),
    defineField({
      name: 'formFields',
      type: 'array',
      title: 'Campos do Formulário',
      group: 'formFields',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          name: 'formFields',
          type: 'applicationFormFields',
        }),
      ],
    }),
  ],
});
