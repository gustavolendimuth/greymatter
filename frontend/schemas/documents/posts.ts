import { format, parseISO } from 'date-fns';
import { BsFilePost } from 'react-icons/bs';
import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import image from 'schemas/objects/image';
import { fullValidation, preview } from 'schemas/utils/internationalizedArrayUtils';

import authorDocument from './author';

export default defineType({
  name: 'posts',
  title: 'Posts',
  icon: BsFilePost,
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Categoria',
      description: 'Selecione a categoria do post',
      type: 'string',
      initialValue: 'insights',
      validation: (rule) => rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Insights', value: 'insights' },
          { title: 'News', value: 'news' },
        ],
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'title',
      title: 'Título do Post',
      type: 'internationalizedArrayString',
      validation: (rule) => fullValidation({ rule, title: 'Título do Post', languages }),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) =>
          Array.isArray(doc.title) && doc.title.find((t) => t.value)?.value,
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo do Post',
      type: 'internationalizedArrayPostContent',
      validation: (rule) =>
        fullValidation({ rule, title: 'Conteúdo do Post', languages }),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'internationalizedArrayString',
      validation: (rule) => fullValidation({ rule, title: 'Resumo', languages }),
    }),
    image({ title: 'Imagem de Capa', name: 'coverImage' }),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'datetime',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      description: 'Para agendar um post, selecione uma data futura.',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: (rule) => rule.required(),
      to: [{ type: authorDocument.name }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean);

      return { title: preview(title), media, subtitle: subtitles.join(' ') };
    },
  },
});
