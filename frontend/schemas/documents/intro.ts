import { FiHome } from 'react-icons/fi';

import documentType from '../objects/documentType';

export default {
  name: 'intro',
  type: 'document',
  title: 'Intro',
  preview: { select: { title: 'title' } },
  icon: FiHome,
  fieldsets: [{ name: 'background', title: 'Background', options: { collapsible: true, collapsed: false } }],
  fields: [
    documentType('section'),
    {
      name: 'title',
      type: 'string',
      title: 'Título da Seção',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'richText',
      title: 'Texto da seção',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subTitle',
      type: 'text',
      title: 'Subtítulo da seção',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Imagem',
    },
    {
      name: 'backgroundColor',
      title: 'Cor de fundo',
      type: 'color',
      fieldset: 'background',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Imagem de Fundo',
      fieldset: 'background',
      description: 'Tamanho ideal de 2000px de largura e resolução de 72dpi.',
      liveEdit: false,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heightLimit',
      type: 'boolean',
      initialValue: false,
      title: 'Limitar altura da imagem',
      fieldset: 'background',
      description: 'Quando ativo, limita o tamanho da imagem de fundo ao tamanho da tela.',
    },
    {
      name: 'alignToTop',
      type: 'boolean',
      initialValue: false,
      fieldset: 'background',
      title: 'Alinhar a partir do topo',
      description: 'Ative esta opção para alinhar a imagem a partir do topo. O padrão é ao centro.',
    },
  ],
};
