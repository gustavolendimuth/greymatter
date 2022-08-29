export default {
  name: 'language',
  type: 'document',
  title: 'Languages',
  hidden: ({ currentUser }) => !(currentUser.roles
    .find(({ name }) => name === 'administrator')),
  description: 'Adicione idiomas ao site.',
  fields: [
    {
      name: 'language',
      type: 'string',
      title: 'Idioma',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'abbreviation',
      type: 'string',
      title: 'Abreviação',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'code',
      type: 'string',
      title: 'Código ISO',
      validation: (Rule) => Rule.required(),
      description: 'Código ISO de referência do idioma. Para ver a lista de códigos completa, acesse https://www.w3schools.com/tags/ref_language_codes.asp',
    },
  ],
};
