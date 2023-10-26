/* eslint-disable react/jsx-no-bind */

'use client';

import Link from 'next/link';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import useScrollTo from '../_Hooks/useScrollTo';

type DownArrowProps = ComponentProps<'svg'> & {
  styles?: string;
  to: string;
  className?: string;
  arrowColor?: string;
};

export default function DownArrow({ className, to, ...downArrowProps }: DownArrowProps) {
  useScrollTo();

  function handleClick(event: any) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);

    const targetElement = document.getElementById(targetId);

    targetElement?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Link href={to} onClick={handleClick} className="flex w-full justify-center">
      <svg
        {...downArrowProps}
        className={twMerge('w-16', className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-64 0 512 512"
        width="64"
        height="64"
        fill="#fff"
      >
        <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
      </svg>
    </Link>
  );
}
