/* eslint-disable import/no-anonymous-default-export */
import { FaClipboardList } from 'react-icons/fa';
import { defineArrayMember, defineField, defineType } from 'sanity';
import backgroundImage from 'schemas/objects/backgroundImage';
import sectionText from 'schemas/objects/sectionText';
import sectionTitle from 'schemas/objects/sectionTitle';

import documentType from '../objects/documentType';

const title = 'Application Form';

export default defineType({
  name: 'applicationForm',
  type: 'document',
  title: 'Application Form',
  preview: {
    prepare() {
      return { title };
    },
  },
  icon: FaClipboardList,
  groups: [
    {
      name: 'formFields',
      title: 'Campos do Formulário',
    },
  ],
  fields: [
    defineField(documentType('page')),
    sectionTitle,
    sectionText,
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
    backgroundImage(),
  ],
});
