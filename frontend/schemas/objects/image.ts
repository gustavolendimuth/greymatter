/* eslint-disable import/no-anonymous-default-export */

import { defineField } from 'sanity';

type CreateImageFieldProps = {
  type?: 'withCaption' | 'withPortrait' | 'withDimensions' | '';
  name?: string;
  title?: string;
  description?: string;
  fieldset?: string;
  group?: string;
};

export default ({
  type = '',
  name = 'image',
  title = 'Imagem',
  description = 'Faça upload de uma imagem, ou selecione uma da galeria',
  fieldset = '',
  group = '',
}: CreateImageFieldProps = {}) => {
  const baseField = defineField({
    name,
    type: 'image',
    title,
    validation: (rule: any) =>
      rule.custom((image: any) => (image?.asset?._ref === undefined ? 'A imagem é obrigatória' : true)),
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

  if (type === 'withCaption') {
    // @ts-expect-error
    baseField.fields.push({
      name: 'caption',
      type: 'string',
      title: 'Legenda',
    });
  } else if (type === 'withPortrait') {
    // @ts-expect-error
    baseField.fields.push({
      name: 'imagePortrait',
      type: 'image',
      title: 'Imagem Mobile',
      description: 'Selecione somente quando necessário mostrar uma imagem diferente em telas menores.',
      options: {
        hotspot: true,
      },
    });
  } else if (type === 'withDimensions') {
    // @ts-expect-error
    baseField.fields.push(
      {
        name: 'width',
        type: 'number',
        title: 'Largura',
        description: 'Medida em pixels.',
      },
      {
        name: 'height',
        type: 'number',
        title: 'Altura',
        description: 'Medida em pixels.',
      }
    );
  }

  return baseField;
};
