import imageUrlBuilder from '@sanity/image-url';

import { ImageType } from '@/types/propertiesTypes';

import sanityClient from './sanityClient';

const builder = imageUrlBuilder(sanityClient);

export default function urlFor(source: ImageType) {
  return builder.image(source);
}
