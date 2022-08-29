import F from '../fieldsText';

export default {
  name: 'communityMembers',
  type: 'document',
  title: 'Community Members',
  fields: [
    {
      name: 'preview',
      type: 'preview',
      title: F.default.preview.title,
    },
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
      name: 'title',
      type: 'string',
      title: F.default.title.title,
      validation: (Rule) => Rule.required(),
      description: F.teamMembers.title.description,
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nome',
      description: 'Nome do membro da comunidade',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'foto',
      type: 'figure',
      title: 'Foto',
      validation: (Rule) => Rule.required(),
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
  ],
};
