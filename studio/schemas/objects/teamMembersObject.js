export default {
  type: 'object',
  name: 'teamMembersObject',
  title: 'Equipe',
  fields: [
    {
      type: 'array',
      name: 'teamMembers',
      title: 'Membros da equipe',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMembers' }],
        },
      ],
    },
    {
      title: 'Ordem de Exibição',
      name: 'teamMembersOrder',
      type: 'string',
      initialValue: 'custom',
      description: `Escolha a ordem que será exibida no site. Esta ordem é válida para 
        a página inicial e para a página de biografia dos membros da equipe`,
      options: {
        list: [
          { title: 'Personalizada', value: 'custom' },
          { title: 'Alfabética', value: 'alphabetic' },
          { title: 'Cargo', value: 'position' },
          { title: 'Alfabética e cargo', value: 'AlphabeticPosition' },
          // ...
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
  ],
};
