import { defineField } from 'sanity';

type Options = 'larger' | 'align';

type BackgroundImageProps = {
  options?: Array<Options> | Options;
};

function backgroundImage({ options }: BackgroundImageProps = {}) {
  const backgroundImage = defineField({
    name: 'background',
    type: 'image',
    title: 'Background',
    description: 'Tamanho ideal de 2000 pixels de largura e resolução de 72dpi.',
    options: {
      hotspot: true,
    },
    fields: [],
  });

  const fieldOptions = {
    larger: defineField({
      name: 'larger',
      type: 'boolean',
      title: 'Maior que a altura da seção',
      initialValue: false,
    }),
    align: defineField({
      name: 'align',
      type: 'string',
      title: 'Alinhado ao',
      initialValue: 'object-center',
      options: {
        list: [
          { title: 'Topo', value: 'object-top' },
          { title: 'Centro', value: 'object-center' },
          { title: 'Fundo', value: 'object-bottom' },
        ],
      },
    }),
  };

  if (options && !Array.isArray(options)) {
    backgroundImage?.fields?.push(fieldOptions[options]);
  }

  if (options && Array.isArray(options)) {
    options.forEach((option) => {
      backgroundImage?.fields?.push(fieldOptions[option]);
    });
  }

  return backgroundImage;
}

export default backgroundImage;
