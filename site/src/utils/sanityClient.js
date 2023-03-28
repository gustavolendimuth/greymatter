import sanityClient from '@sanity/client';
import getSubdomain from './getSubdomain';

export default sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: getSubdomain() || process.env.REACT_APP_PROJECT_DATASET,
  apiVersion: '2021-10-21',
  useCdn: false,
});
