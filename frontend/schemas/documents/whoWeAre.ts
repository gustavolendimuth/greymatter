/* eslint-disable import/no-anonymous-default-export */
import { FaQuestion } from 'react-icons/fa';
import { defineType } from 'sanity';
import backgroundImage from 'schemas/objects/backgroundImage';
import image from 'schemas/objects/image';
import sectionText from 'schemas/objects/sectionText';
import sectionTitle from 'schemas/objects/sectionTitle';

import documentType from '../objects/documentType';

export default defineType({
  name: 'whoWeAre',
  type: 'document',
  title: 'Who we are',
  icon: FaQuestion,
  preview: {
    prepare() {
      return { title: 'Who We Are Section' };
    },
  },
  fieldsets: [{ name: 'background', title: 'Background' }],
  fields: [
    documentType('section'),
    sectionTitle,
    sectionText,
    image(),
    backgroundImage(),
  ],
});
