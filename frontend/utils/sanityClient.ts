import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_PROJECT_DATASET,
  apiVersion: '2022-11-15',
  useCdn: false,
});
