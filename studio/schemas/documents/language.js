/* eslint-disable import/no-anonymous-default-export */
import { BsGlobe2 } from 'react-icons/bs';
import documentType from '../objects/documentType';

export default {
  name: 'language',
  type: 'document',
  title: 'Languages',
  icon: BsGlobe2,
  description: 'Adicione idiomas ao site.',
  fields: [
    documentType('config'),
    {
      name: 'title',
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
