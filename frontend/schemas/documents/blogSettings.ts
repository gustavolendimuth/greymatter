/* eslint-disable sonarjs/no-duplicate-string */
import { CogIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import { fullValidation } from 'schemas/utils/internationalizedArrayUtils';

export default defineType({
  name: 'blogSettings',
  title: 'Insights & News Settings',
  type: 'document',
  icon: CogIcon,
  preview: {
    prepare() {
      return { title: 'Insights & News Settings' };
    },
  },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: [
    { name: 'insights', title: 'Insights' },
    { name: 'news', title: 'News' },
  ],
  fields: [
    defineField({
      name: 'insights',
      type: 'object',
      title: 'Insights',
      group: 'insights',
      fields: [
        defineField({
          name: 'title',
          description: 'This field is the title of Insights section.',
          title: 'Título',
          type: 'internationalizedArrayString',
          validation: (rule) => fullValidation({ rule, title: 'Insights Title', languages }),
        }),
        defineField({
          name: 'description',
          description: 'Used both for the <meta> description tag for SEO, and the blog subheader.',
          title: 'Descrição',
          type: 'internationalizedArrayBlogDescription',
        }),
      ],
    }),
    defineField({
      name: 'news',
      type: 'object',
      title: 'News',
      group: 'news',
      fields: [
        defineField({
          name: 'title',
          description: 'This field is the title of News section.',
          title: 'Título',
          type: 'internationalizedArrayString',
          validation: (rule) => fullValidation({ rule, title: 'Insights Title', languages }),
        }),
        defineField({
          name: 'description',
          description: 'Used both for the <meta> description tag for SEO, and the blog subheader.',
          title: 'Descrição',
          type: 'internationalizedArrayBlogDescription',
        }),
      ],
    }),
    // defineField({
    //   name: 'ogImage',
    //   title: 'Open Graph Image',
    //   description: 'Usado para pré-visualização em redes sociais.',
    //   type: 'object',
    //   validation: (rule) => rule.required(),
    //   components: {
    //     input: OpenGraphInput as any,
    //   },
    //   fields: [
    //     defineField({
    //       name: 'title',
    //       title: 'Title',
    //       type: 'string',
    //     }),
    //   ],
    // }),
  ],
});
