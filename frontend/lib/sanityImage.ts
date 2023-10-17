/* eslint-disable import/prefer-default-export */
import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from 'lib/sanityApi';

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: any) => imageBuilder.image(source);
