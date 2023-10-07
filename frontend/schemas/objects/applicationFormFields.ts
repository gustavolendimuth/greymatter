import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import { validation } from 'schemas/utils/internationalizedArrayUtils';

export default defineType({
  title: 'Campos',
  type: 'object',
  name: 'applicationFormFields',
  fields: [
    defineField({
      title: 'Nome do campo',
      name: 'title',
      type: 'internationalizedArrayString',
      validation: (Rule) => validation({ Rule, name: 'Nome do Campo', languages }),
    }),
    defineField({
      title: 'Tipo',
      name: 'fieldType',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'text',
      options: {
        list: [
          { title: 'Título da seção', value: 'title' },
          { title: 'Texto curto', value: 'text' },
          { title: 'Texto longo', value: 'textarea' },
          { title: 'Upload', value: 'upload' },
        ],
      },
    }),
    // {
    //   title: 'Valor do campo',
    //   name: 'fieldValue',
    //   type: 'string',
    //   components: {
    //     input: CustomTypeSelect,
    //   },
    // },
    defineField({
      title: 'Valor do campo',
      name: 'fieldValue',
      type: 'string',
      initialValue: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Opções válidas somente quando o tipo acima for Texto curto.',
      hidden: ({ parent }) => parent && parent.fieldType !== 'text', // Hide this field if the "type" is not "text"
      options: {
        list: [
          { title: 'Texto', value: 'text' },
          { title: 'Números', value: 'number' },
          { title: 'Data', value: 'date' },
          { title: 'Moeda', value: 'currency' },
          { title: 'CNPJ', value: 'cnpj' },
        ],
      },
    }),
    defineField({
      title: 'Largura',
      name: 'columnSize',
      type: 'number',
      initialValue: 1,
      description: 'Será possível utilizar mais de uma coluna somente quando o campo for do tipo Texto curto.',
      options: {
        list: [
          { title: '1 coluna', value: 1 },
          { title: '2 colunas', value: 2 },
          { title: '3 colunas', value: 3 },
        ],
      },
    }),
    defineField({
      title: 'Campo obrigatório',
      name: 'required',
      type: 'boolean',
      initialValue: false,
      description: 'O preenchimento do campo é obrigatório?',
    }),
  ],
});
