import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

type ContainerProps = ComponentProps<'div'> & VariantProps<typeof div>;

const div = tv({
  base: 'flex relative flex-col items-center w-full m-auto px-4 lg:px-10',
  variants: {
    fullHeight: {
      true: 'min-h-calc-full',
    },
    gap: {
      true: 'gap-calc-lg',
    },
    justify: {
      true: 'justify-between',
    },
  },
});

export default function Container({
  fullHeight,
  justify,
  gap,
  className,
  ...sectionProps
}: ContainerProps) {
  return (
    <div {...sectionProps} className={twMerge(div({ fullHeight, gap, justify }), className)} />
  );
}
