import '../assets/styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';
import '../assets/styles/SegoeUI.css';

import { toPlainText } from '@portabletext/react';
import Footer from 'app/_components/Footer';
import HomeProvider from 'context/Provider';
import { getClient } from 'lib/sanityClient';
import { getFooter, getIntro, getSiteSettings } from 'lib/sanityFetch';
import { Metadata } from 'next';
import React from 'react';

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

type Props = {
  params: { locale: string };
};

const client = getClient();

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const intro = await getIntro(client, locale);

  return {
    title: 'Grey Matter',
    description: toPlainText(intro.text),
  };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const footer = await getFooter(client, locale);
  const { logo } = await getSiteSettings(client);

  return (
    <html lang={locale}>
      <body>
        <HomeProvider>{children}</HomeProvider>
        <Footer locale={locale} data={footer} greymatterLogo={logo} />
      </body>
    </html>
  );
}
