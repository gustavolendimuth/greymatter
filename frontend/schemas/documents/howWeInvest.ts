import { FaChartPie } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import image from 'schemas/objects/image';
import sectionTitle from 'schemas/objects/sectionTitle';

import backgroundImage from '../objects/backgroundImage';
import documentType from '../objects/documentType';

export default defineType({
  name: 'howWeInvest',
  type: 'document',
  title: 'How We Invest',
  icon: FaChartPie,
  preview: {
    prepare() {
      return { title: 'How We Invest Section' };
    },
  },
  fieldsets: [{ name: 'background', title: 'Background' }],
  fields: [
    documentType('section'),
    sectionTitle,
    image({ name: 'firstCard', title: 'Primeiro Card', description: 'Primeiro card da seção.' }),
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
