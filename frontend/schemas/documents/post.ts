import { BookIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import authorType from './author';

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you
 * create or edit a post in the studio.
 *
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'posts',
  title: 'Posts',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      description: 'Select the category for this post',
      type: 'string',
      initialValue: 'insights',
      validation: (rule) => rule.required(),
      options: {
        layout: 'radio', // This changes the layout to radio buttons
        list: [
          { title: 'Insights', value: 'insights' },
          { title: 'News', value: 'news' },
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => ((Array.isArray(doc.title)) && (doc.title.find((t) => t.value))?.value),
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Post Content',
      type: 'internationalizedArrayPostContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'internationalizedArrayText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: (rule) => rule.required(),
      to: [{ type: authorType.name }],
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     date: 'date',
  //     media: 'coverImage',
  //   },
  //   prepare({ title, media, author, date }) {
  //     const subtitles = [
  //       author && `by ${author}`,
  //       date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
  //     ].filter(Boolean);

  //     return { title, media, subtitle: subtitles.join(' ') };
  //   },
  // },
});
