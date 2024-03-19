import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';
import { BackgroundType } from 'types/propertiesTypes';

import Img from './Img';

type BackgroundImageProps = {
  image?: BackgroundType | null;
  className?: ClassNameValue;
  backgroundColor?: ClassNameValue;
};

export default function BackgroundImage({
  image,
  className,
  backgroundColor,
}: BackgroundImageProps) {
  if (!image) return null;

  const backgroundHeight = `
    ${image?.larger ? 'h-calc-2xfull' : 'min-h-calc-full'}
  `;

  return (
    <div className={twMerge('absolute inset-0 z-[-1] bg-white', backgroundColor, backgroundHeight)}>
      <Img
        image={{ ...image, alt: 'Section Background' }}
        className={twMerge('h-full w-screen object-cover', className, image?.align)}
        alt="Background image"
        width={2200}
        height={2200}
        priority
      />
    </div>
  );
}
