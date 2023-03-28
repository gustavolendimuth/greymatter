/* eslint-disable import/no-anonymous-default-export */
import { FaClipboardList } from 'react-icons/fa';
import F from '../fieldsText';
import documentType from '../objects/documentType';

export default {
  name: 'applicationForm',
  type: 'document',
  title: 'Application Form',
  icon: FaClipboardList,
  groups: [
    {
      name: 'formFields',
      title: 'Campos do Formulário',
    },
  ],
  fields: [
    documentType('page'),
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
      name: 'text',
      type: 'richText',
      title: 'Texto',
    },
    {
      name: 'background',
      type: 'figure',
      title: 'Imagem de fundo da seção',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
    },
    {
      name: 'formFields',
      type: 'array',
      title: 'Campos do Formulário',
      group: 'formFields',
      of: [
        {
          title: 'Campos',
          type: 'object',
          fields: [
            {
              title: 'Nome do campo',
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Tipo',
              name: 'type',
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
            },
            {
              title: 'Valor do campo',
              name: 'value',
              type: 'string',
              initialValue: 'text',
              validation: (Rule) => Rule.required(),
              description: 'Opções válidas somente quando o tipo acima for Texto curto.',
              options: {
                list: [
                  { title: 'Texto', value: 'text' },
                  { title: 'Números', value: 'number' },
                  { title: 'Data', value: 'date' },
                  { title: 'Moeda', value: 'currency' },
                  { title: 'CNPJ', value: 'cnpj' },
                ],
              },
            },
            {
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
            },
            {
              title: 'Campo obrigatório',
              name: 'required',
              type: 'boolean',
              initialValue: false,
              description: 'O preenchimento do campo é obrigatório?',
            },
          ],
        },
      ],
    },
  ],
};
