export default {
  name: 'background',
  type: 'object',
  title: 'Background',
  fields: [
    {
      name: 'color',
      title: 'Cor de fundo',
      type: 'color',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagem',
      liveEdit: true,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Texto alternativo da imagem - SEO',
      validation: (Rule) => Rule.required(),
      description: `Preencha este campo com um texto que descreva a imagem. 
      Imagens com texto alternativo ajudam no ranking dos sites de busca.`,
    },
    {
      name: 'heightLimit',
      type: 'boolean',
      initialValue: false,
      title: 'Limitar altura da imagem',
      description: 'Quando ativo, limita o tamanho da imagem de fundo ao tamanho da tela.',
    },
    {
      name: 'alignToTop',
      type: 'boolean',
      initialValue: false,
      title: 'Alinhar a partir do topo',
      description: 'Ative esta opção para alinhar a imagem a partir do topo. O padrão é ao centro.',
    },
  ],
};
