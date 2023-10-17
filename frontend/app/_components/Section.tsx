import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = ComponentProps<'div'>;

export default function Section({ className, ...sectionProps }: SectionProps) {
  return <section {...sectionProps} className={twMerge('w-full', className)} />;
}
