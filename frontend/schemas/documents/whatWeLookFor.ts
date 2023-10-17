/* eslint-disable import/no-anonymous-default-export */
import { FaSearch } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import backgroundImage from 'schemas/objects/backgroundImage';
import sectionTitle from 'schemas/objects/sectionTitle';

import documentType from '../objects/documentType';

export default defineType({
  name: 'whatWeLookFor',
  type: 'document',
  title: 'What we look for',
  icon: FaSearch,
  preview: {
    prepare() {
      return { title: 'What We Look For Section' };
    },
  },
  fieldsets: [{ name: 'background', title: 'Background' }],
  fields: [
    documentType('section'),
    sectionTitle,
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards da seção',
      of: [{ type: 'card' }],
      validation: (rule) => rule.required(),
    }),
    backgroundImage(),
  ],
});
