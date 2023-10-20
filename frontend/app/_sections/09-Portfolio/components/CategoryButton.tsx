import React, { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'bg-white rounded-2xl px-7 py-1 text-ternary font-600 hover:text-white hover:bg-ternary border border-white  transition-colors duration-300',
  variants: {
    active: {
      true: 'bg-ternary text-white',
    },
  },
  defaultVariants: {
    active: false,
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

export default function CategoryButton({ active, ...props }: ButtonProps) {
  return <button type="button" className={button({ active })} {...props} />;
}
