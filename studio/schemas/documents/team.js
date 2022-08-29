import F from '../fieldsText';

export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  groups: [
    {
      name: 'teamMembers',
      title: 'Membros da Equipe',
    },
  ],
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
      name: 'pageTitle',
      type: 'string',
      title: 'Título da Seção',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: F.default.title.title,
      validation: (Rule) => Rule.required(),
      description: F.default.title.description,
    },
    {
      name: 'background',
      type: 'figure',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
    {
      name: 'teamMembers',
      title: 'Equipe',
      type: 'teamMembersObject',
      group: 'teamMembers',
    },
  ],
};
