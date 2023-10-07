export default {
  name: 'figure',
  type: 'object',
  title: 'Figure',
  fields: [
    {
      name: 'imageLg',
      type: 'image',
      title: 'Imagem desktop',
      validation: (Rule) => Rule.required(),
      description: `Imagem para desktop é obrigatória. Preencha o campo mobile somente 
        quando necessário mostrar uma imagem diferente em telas menores`,
      liveEdit: false,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageSm',
      type: 'image',
      title: 'Imagem mobile',
      liveEdit: false,
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
  ],
};
