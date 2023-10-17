import Navbar from 'app/_components/Navbar';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  locale: string;
};

export default function Layout({ children, locale }: LayoutProps) {
  return (
    <>
      <Navbar position="absolute" locale={locale} />
      { children }
    </>
  );
}
