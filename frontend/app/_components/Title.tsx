/* eslint-disable jsx-a11y/heading-has-content */
import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Title({ className, ...componentProps }: ComponentProps<'h2'>) {
  return (
    <h2
      className={twMerge('md:text-7xl text-5xl text-primary font-900 uppercase text-center', className)}
      {...componentProps}
    />
  );
}
