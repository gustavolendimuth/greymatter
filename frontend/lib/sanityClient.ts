/* eslint-disable no-underscore-dangle */
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanityApi';
import { createClient, type SanityClient } from 'next-sanity';

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    studioUrl: '/studio',
    perspective: 'published',
  });
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts');
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    });
  }
  return client;
}

export const getSanityImageConfig = () => getClient();
