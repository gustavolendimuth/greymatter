/* eslint-disable import/no-anonymous-default-export */
import { FaDigitalTachograph } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import image from 'schemas/objects/image';

export default defineType({
  name: 'footer',
  type: 'document',
  title: 'Footer',
  icon: FaDigitalTachograph,
  preview: {
    prepare() {
      return {
        title: 'Footer',
      };
    },
  },
  fields: [
    image({ title: 'Logo', name: 'logo' }),
    defineField({
      name: 'formText',
      type: 'internationalizedArrayRichText',
      title: 'Texto do formulário',
    }),
  ],
});
