/* eslint-disable import/prefer-default-export */

import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getClient } from 'lib/sanityClient';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

interface Props {
  asset: SanityImageSource
  alt: string
  caption?: string
}

export function SanityImage(props: Props) {
  const { asset, alt, caption } = props;
  const client = getClient();
  const { loader, ...imageProps } = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  return (
    <figure>
      <Image
        {...imageProps}
        alt={alt}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      {caption && (
        <figcaption className="mt-2 text-left italic text-sm text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
