/* eslint-disable import/no-anonymous-default-export */
import { FaDigitalTachograph } from 'react-icons/fa';
import F from '../fieldsText';

export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  icon: FaDigitalTachograph,
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
      name: 'title',
      type: 'string',
      title: F.default.title.title,
      validation: (Rule) => Rule.required(),
      description: F.default.title.description,
    },
    {
      name: 'logo',
      type: 'figureDesktop',
      title: 'Logo',
    },
    {
      name: 'formText',
      type: 'richText',
      title: 'Texto do formulário',
    },
    {
      name: 'formButton',
      type: 'string',
      title: 'Texto do botão do formulário',
    },
    {
      name: 'background',
      type: 'background',
      title: 'Background da seção',
    },
  ],
};
