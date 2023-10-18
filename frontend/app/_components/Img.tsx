import { ImageFormat } from '@sanity/image-url/lib/types/types';
import { urlForImage } from 'lib/sanityImage';
import Image, { ImageProps } from 'next/image';
import React from 'react';
import { ImageType } from 'types/propertiesTypes';

type ImgProps = Omit<ImageProps, 'src'> & {
  image?: ImageType;
  width: number;
  height: number;
  quality?: number;
  format?: ImageFormat;
  className?: string;
  src?: string;
};

type BuildUrlProps = {
  image: ImageType;
  width: number;
  height: number;
  quality: number;
  format?: ImageFormat;
};

const buildUrl = ({ image, width, quality, format }: BuildUrlProps) => {
  const urlBuilder = urlForImage(image?.asset).quality(quality).width(width);

  if (format) {
    urlBuilder.format(format);
  } else {
    urlBuilder.auto('format');
  }

  return urlBuilder.fit('crop').crop('focalpoint').url();
};

function Img({
  image,
  width,
  height,
  quality = 90,
  format,
  className,
  ...props
}: ImgProps) {
  if (!image) return null;

  const url = buildUrl({ image, width, height, quality, format });

  return (
    <Image
      {...props}
      alt={image?.alt}
      className={className}
      width={width}
      height={height}
      src={url}
    />
  );
}

export default Img;
