/* eslint-disable import/no-anonymous-default-export */

import { defineField } from 'sanity';

type Options = 'caption' | 'portrait' | 'dimensions' | 'brighten' | 'orientation';

type CreateImageFieldProps = {
  options?: Array<Options> | Options;
  name?: string;
  title?: string;
  description?: string;
  fieldset?: string;
  group?: string;
};

type FieldOptions = {
  caption?: any;
  portrait?: any;
  dimensions?: any[];
  brighten?: any;
  orientation?: any;
};

function image({
  options,
  name = 'image',
  title = 'Imagem',
  description = 'Faça upload de uma imagem, ou selecione uma da galeria',
  fieldset = '',
  group = '',
}: CreateImageFieldProps = {}) {
  const baseField = defineField({
    name,
    type: 'image',
    title,
    validation: (rule: any) =>
      rule.custom((image: any) =>
        image?.asset?._ref === undefined ? 'A imagem é obrigatória' : true
      ),
    description: description || 'Faça upload de uma imagem, ou selecione uma da galeria',
    options: {
      hotspot: true,
    },
    fieldset,
    group,
    fields: [
      {
        name: 'alt',
        type: 'string',
        title: 'Texto Alternativo',
        validation: (rule: any) => rule.required(),
        description: 'Importante para SEO e acessibilidade.',
      },
    ],
  });

  const fieldOptions: FieldOptions = {
    caption: defineField({
      name: 'caption',
      type: 'string',
      title: 'Legenda',
    }),
    portrait: defineField({
      name: 'imagePortrait',
      type: 'image',
      title: 'Imagem Mobile',
      description:
        'Selecione somente quando necessário mostrar uma imagem diferente em telas menores.',
      options: {
        hotspot: true,
      },
    }),
    dimensions: [
      defineField({
        name: 'width',
        type: 'number',
        title: 'Largura',
        description: 'Medida em pixels.',
      }),
      defineField({
        name: 'height',
        type: 'number',
        title: 'Altura',
        description: 'Medida em pixels.',
      }),
    ],
    brighten: defineField({
      name: 'brighten',
      type: 'boolean',
      title: 'Clarear',
      initialValue: false,
    }),
    orientation: defineField({
      name: 'orientation',
      type: 'string',
      title: 'Orientação',
      initialValue: 'landscape',
      options: {
        list: [
          { title: 'Horizontal', value: 'landscape' },
          { title: 'Vertical', value: 'portrait' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
  };

  if (options && !Array.isArray(options)) {
    const fieldOption = fieldOptions[options];
    if (Array.isArray(fieldOption)) {
      baseField?.fields?.push(...fieldOption);
    } else {
      baseField?.fields?.push(fieldOption);
    }
  }

  if (options && Array.isArray(options)) {
    options.forEach((option) => {
      const fieldOption = fieldOptions[option];
      if (Array.isArray(fieldOption)) {
        baseField?.fields?.push(...fieldOption);
      } else if (typeof option === 'string') {
        baseField?.fields?.push(fieldOption);
      }
    });
  }

  return baseField;
}

export default image;
