/* eslint-disable sonarjs/no-duplicate-string */
import { CogIcon } from '@sanity/icons';
import * as demo from 'lib/demo.data';
import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import { validation } from 'schemas/utils/internationalizedArrayUtils';

import OpenGraphInput from '../components/OpenGraphInput';

export default defineType({
  name: 'insightsSettings',
  title: 'Insights & News Settings',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'insightsTitle[0].value', subtitle: 'insightsDescription[0].value' } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fieldsets: [
    { name: 'insights', title: 'Insights Settings', options: { collapsible: true, collapsed: false } },
    { name: 'news', title: 'News Settings', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    defineField({
      name: 'insightsTitle',
      description: 'This field is the title of Insights Section.',
      title: 'Insights Title',
      type: 'internationalizedArrayString',
      initialValue: demo.title,
      validation: (Rule) => validation({ Rule, name: 'Insights Title', languages }),
      fieldset: 'insights',
    }),
    defineField({
      name: 'insightsDescription',
      description: 'Used both for the <meta> description tag for SEO, and the blog subheader.',
      title: 'Insights Description',
      type: 'internationalizedArrayBlogDescription',
      fieldset: 'insights',
    }),
    defineField({
      name: 'newsTitle',
      description: 'This field is the title of News Section.',
      title: 'News Title',
      type: 'internationalizedArrayString',
      initialValue: demo.title,
      validation: (Rule) => validation({ Rule, name: 'Insights Title', languages }),
      fieldset: 'news',
    }),
    defineField({
      name: 'newsDescription',
      description: 'Used both for the <meta> description tag for SEO, and the blog subheader.',
      title: 'News Description',
      type: 'internationalizedArrayBlogDescription',
      fieldset: 'news',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      description: 'Used for social media previews when linking to the index page.',
      type: 'object',
      validation: (rule) => rule.required(),
      components: {
        input: OpenGraphInput as any,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
      ],
    }),
  ],
});
