/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'preview',
  type: 'object',
  title: 'Estado da Publicação',
  description: 'Quando o preview estiver ativo, ao clicar no botão Publish, será gerado um preview em https://preview.greymatter.technology. Ao terminar a edição, para mudar do endereço de preview para o endereço principal, desative esta opção, altere o nome da versão tirando a palavra preview e apague a versão principal publicada anteriormente.',
  fields: [
    {
      name: 'isPreview',
      type: 'boolean',
      title: 'Preview?',
      initialValue: true,
    },
  ],
};
