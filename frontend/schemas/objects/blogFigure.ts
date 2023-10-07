import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import { validation } from 'schemas/utils/internationalizedArrayUtils';

export default defineType({
  name: 'blogFigure',
  type: 'object',
  title: 'Blog Figure',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagem',
      validation: (Rule) => Rule.required(),
      description: 'Faça upload de uma imagem, ou selecione uma da galeria',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'internationalizedArrayString',
          validation: (Rule) => validation({ Rule, name: 'Texto alternativo', languages }),
          title: 'Texto Alternativo',
          description: `Preencha este campo com um texto que descreva a imagem. 
            Imagens com texto alternativo ajudam no ranking dos sites de busca.`,
        }),
        defineField({
          name: 'caption',
          type: 'internationalizedArrayString',
          title: 'Legenda',
          validation: (Rule) => validation({ Rule, name: 'Texto alternativo', languages }),
        }),
      ],
    }),
  ],
});
