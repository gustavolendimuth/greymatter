/* eslint-disable react-func/max-lines-per-function */

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
  const baseField = {
    name,
    type: 'image',
    title,
    validation: (rule: any) => rule.required(),
    description: description || 'Faça upload de uma imagem, ou selecione uma da galeria',
    options: {
      hotspot: true,
      crop: true,
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
  };

  if (type === 'withCaption') {
    baseField.fields.push(
      // @ts-expect-error
      {
        name: 'caption',
        type: 'string',
        title: 'Legenda',
      },
    );
  } else if (type === 'withPortrait') {
    baseField.fields.push(
      {
        name: 'imagePortrait',
        type: 'image',
        title: 'Imagem Mobile',
        description: 'Selecione somente quando necessário mostrar uma imagem diferente em telas menores.',
        // @ts-expect-error
        options: {
          hotspot: true,
        },
      },
    );
  } else if (type === 'withDimensions') {
    baseField.fields.push(
      // @ts-expect-error
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
      },
    );
  }

  return baseField;
};
