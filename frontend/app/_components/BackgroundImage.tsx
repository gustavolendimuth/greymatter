import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';
import { BackgroundType } from 'types/propertiesTypes';

import Img from './Img';

type BackgroundImageProps = {
  image: BackgroundType | null;
  className?: ClassNameValue;
  backgroundColor?: ClassNameValue;
};

export default function BackgroundImage({ image, className, backgroundColor }: BackgroundImageProps) {
  if (!image) return null;

  const backgroundHeight = `
    ${image?.larger ? 'h-calc-2xfull' : 'h-full'}
  `;

  return (
    <div className={twMerge('bg-white absolute z-[-1] inset-0', backgroundColor)}>
      <Img
        image={{ ...image, alt: 'Section Background' }}
        className={twMerge('w-full object-top object-cover', backgroundHeight, className, image?.align)}
        alt="Background image"
        width={2200}
        height={2200}
        priority
      />
    </div>
  );
}
