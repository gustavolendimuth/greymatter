import { BsFillHouseFill } from 'react-icons/bs';
import { defineField, defineType } from 'sanity';
import backgroundImage from 'schemas/objects/backgroundImage';
import image from 'schemas/objects/image';
import sectionText from 'schemas/objects/sectionText';

import documentType from '../objects/documentType';

export default defineType({
  name: 'intro',
  type: 'document',
  title: 'Intro',
  icon: BsFillHouseFill,
  preview: {
    prepare() {
      return { title: 'Intro Section' };
    },
  },
  fieldsets: [{ name: 'background', title: 'Background' }],
  fields: [
    documentType('section'),
    sectionText,
    defineField({
      name: 'subtitle',
      type: 'internationalizedArrayText',
      title: 'Subtítulo da Seção',
    }),
    image({ title: 'Logo', name: 'logo' }),
    backgroundImage({ options: ['larger', 'align'] }),
  ],
});
