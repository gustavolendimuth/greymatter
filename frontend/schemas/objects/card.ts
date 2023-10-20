import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import { fullValidation } from 'schemas/utils/internationalizedArrayUtils';

import image from './image';

export default defineType({
  name: 'card',
  type: 'object',
  title: 'Cards da seção',
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ media, title }) {
      return {
        title,
        media,
      };
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Título do Card',
      validation: (Rule) =>
        Rule.custom((fieldValue, context: any) => {
          const titles = context?.document?.cards?.map((item: any) => item.title) || [];
          const isUnique = titles?.filter((key: any) => key === fieldValue).length === 1;
          return isUnique ? true : 'O título deve ser único';
        }),
    }),
    image(),
    defineField({
      name: 'text',
      type: 'internationalizedArrayRichText',
      title: 'Texto do card',
      validation: (rule) => fullValidation({ rule, title: 'Texto do Card', languages }),
    }),
  ],
});
