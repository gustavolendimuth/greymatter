/* eslint-disable import/no-anonymous-default-export */
import { FaLandmark } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import backgroundImage from 'schemas/objects/backgroundImage';
import sectionTitle from 'schemas/objects/sectionTitle';

import documentType from '../objects/documentType';

export default defineType({
  name: 'whatDoWeOffer',
  type: 'document',
  title: 'What do we offer',
  preview: { select: { title: 'title' } },
  icon: FaLandmark,
  fieldsets: [{ name: 'background', title: 'Background' }],
  fields: [
    documentType('section'),
    sectionTitle,
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards da seção',
      validation: (rule) => rule.required(),
      of: [{ type: 'card' }],
    }),
    backgroundImage(),
  ],
});
