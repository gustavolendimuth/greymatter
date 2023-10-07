/* eslint-disable import/no-anonymous-default-export */
import { FaDigitalTachograph } from 'react-icons/fa';

export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  preview: { select: { title: 'name' } },
  icon: FaDigitalTachograph,
  fields: [
    {
      name: 'logo',
      type: 'figure',
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
