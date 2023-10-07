import Image, { ImageProps } from 'next/image';
import React from 'react';

import { ImageType } from '@/types/propertiesTypes';

import urlFor from '../../utils/urlFor';

type ImgProps = Omit<ImageProps, 'src'> & {
  alt?: string;
  image?: ImageType;
  width?: number | string;
  height?: number | string;
  size?: [width: number, height: number];
  quality?: number;
  format?: 'jpg' | 'pjpg' | 'png' | 'webp';
  className?: string;
  src?: string;
};

function Img({
  image,
  width,
  height,
  quality = 90,
  format,
  className,
  src,
  size,
  ...props
}: ImgProps): React.JSX.Element | null {
  if (!image) {
    return null;
  }

  let url = null;

  if (size) {
    url = format
      ? urlFor(image?.asset)
        .size(...size)
        .quality(quality)
        .format(format)
        .url()
      : urlFor(image?.asset)
        .size(...size)
        .quality(quality)
        .url();
  } else {
    url = format
      ? urlFor(image?.asset)
        .quality(quality)
        .format(format)
        .url()
      : urlFor(image?.asset)
        .quality(quality)
        .url();
  }

  return (
    <Image
      {...props}
      className={className}
      width={width || 0}
      height={height || 0}
      src={url || src || ''}
    />
  );
}

export default Img;
