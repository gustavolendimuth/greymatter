import F from '../fieldsText';

export default {
  name: 'teamMembers',
  type: 'document',
  title: 'Team Members',
  fields: [
    {
      name: 'language',
      type: 'reference',
      title: 'Idioma',
      validation: (Rule) => Rule.required(),
      description: 'Selecione o idioma',
      to: [
        {
          type: 'language',
        },
      ],
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nome',
      description: 'Nome do membro da equipe',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: F.default.title.title,
      validation: (Rule) => Rule.required(),
      description: F.teamMembers.title.description,
    },
    {
      name: 'photoLg',
      type: 'image',
      title: 'Foto desktop',
      description: `Imagem para desktop é obrigatória. Preencha o campo mobile somente 
        quando necessário mostrar uma imagem diferente em telas menores`,
      liveEdit: false,
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'photoSm',
      type: 'image',
      title: 'Foto mobile',
      liveEdit: false,
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Texto alternativo da Foto - SEO',
      description: `Preencha este campo com um texto que descreva a imagem.
      Imagens com texto alternativo ajudam no ranking dos sites de busca.`,
    },
    {
      name: 'position',
      type: 'string',
      title: 'Posição',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkedin',
      type: 'string',
      title: 'Linkedin',
    },
    {
      name: 'text',
      type: 'richText',
      title: 'Bio',
      validation: (Rule) => Rule.required(),
    },
  ],
};
