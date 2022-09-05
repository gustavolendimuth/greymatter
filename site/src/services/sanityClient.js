import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'yhcu3nao',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
});
