export default {
  type: 'object',
  name: 'communityMembersObject',
  title: 'Comunidade',
  fields: [
    {
      type: 'array',
      name: 'communityMembers',
      title: 'Membros da comunidade',
      of: [
        {
          type: 'reference',
          to: [{ type: 'communityMembers' }],
        },
      ],
    },
    {
      title: 'Ordem de Exibição',
      name: 'communityMembersOrder',
      type: 'string',
      initialValue: 'custom',
      description: `Escolha a ordem que será exibida no site. Esta ordem é válida para 
        a página inicial e para a página de biografia dos membros da comunidade.`,
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
