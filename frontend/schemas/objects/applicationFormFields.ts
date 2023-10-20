import { FaClipboardList } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';
import { languages } from 'sanity.config';
import { fullValidation, preview } from 'schemas/utils/internationalizedArrayUtils';

const typeList = {
  text: 'Texto curto',
  textarea: 'Texto longo',
  upload: 'Upload',
  title: 'Título da seção',
};

const columnSizeList = {
  1: 'todo espaço',
  2: '2/3 do espaço',
  3: '1/3 do espaço',
};

export default defineType({
  title: 'Campos',
  type: 'object',
  name: 'applicationFormFields',
  icon: FaClipboardList,
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      columnSize: 'columnSize',
    },
    prepare({ title, subtitle, columnSize }) {
      return {
        title: preview(title),
        subtitle: `${typeList[subtitle as keyof typeof typeList]} ${
          subtitle === 'text' ? `e ocupa ${columnSizeList[columnSize as keyof typeof columnSizeList]}` : ''
        }`,
      };
    },
  },

  fields: [
    defineField({
      name: 'title',
      title: 'Nome do campo',
      type: 'internationalizedArrayString',
      validation: (rule) => fullValidation({ rule, title: 'Nome do Campo', languages }),
    }),
    defineField({
      title: 'Tipo',
      name: 'type',
      type: 'string',
      initialValue: 'text',
      validation: (Rule) => Rule.required(),
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
      name: 'value',
      type: 'string',
      initialValue: 'text',
      description: 'Especifique o tipo de valor.',
      hidden: ({ parent }) => parent && parent.type !== 'text',
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
      title: 'Tamanho do campo',
      name: 'columnSize',
      type: 'number',
      initialValue: 1,
      hidden: ({ parent }) => parent && parent.type !== 'text',
      options: {
        list: [
          { title: 'todo espaço', value: 1 },
          { title: '2/3 do espaço', value: 2 },
          { title: '1/3 do espaço', value: 3 },
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
