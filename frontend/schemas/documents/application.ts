/* eslint-disable import/no-anonymous-default-export */
import { FaClipboard } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import sectionText from 'schemas/objects/sectionText';
import sectionTitle from 'schemas/objects/sectionTitle';
import { fullValidation } from 'schemas/utils/internationalizedArrayUtils';

import backgroundImage from '../objects/backgroundImage';
import documentType from '../objects/documentType';
import image from '../objects/image';

export default defineType({
  name: 'application',
  type: 'document',
  title: 'Application',
  icon: FaClipboard,
  preview: {
    prepare() {
      return { title: 'Application Section' };
    },
  },
  fields: [
    defineField(documentType('section')),
    sectionTitle,
    sectionText,
    image({ options: 'dimensions' }),
    defineField({
      name: 'buttonText',
      type: 'internationalizedArrayString',
      title: 'Texto do Botão',
      validation: (rule) => fullValidation({ rule, title: 'Texto do Botão', languages }),
    }),
    backgroundImage(),
  ],
});
