import { PortableText } from '@portabletext/react';
import Container from 'app/_components/Container';
import Img from 'app/_components/Img';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import { getClient } from 'lib/sanityClient';
import Image from 'next/image';
import Link from 'next/link';
import getByLocale from 'utils/getByLocale';
import { getApplication } from 'lib/sanityFetch';

export async function Application({ locale }: { locale: string }) {
  const client = getClient();
  const { title, text, image, buttonText } = await getApplication(client);

  const [titleByLocale, textByLocale, buttonTextByLocale] = getByLocale([title, text, buttonText], locale);

  if (!title || !text) return null;

  return (
    <Section id="application" className="bg-primary">
      <Container gap>
        <div />
        <Title className="text-white">
          {titleByLocale}
        </Title>
        <Img
          alt={image?.alt || 'Application image'}
          image={image}
          width={image?.width}
          height={image?.height}
          size={[image?.width || 200, image?.height
          || 200]}
        />
        <div className="text-center text-info text-2xl mx-auto max-w-[767px]">
          {text && <PortableText value={textByLocale} />}
        </div>
        <Link
          href="/application-form"
          className="uppercase font-600 bg-primary text-white rounded-lg border-2 flex items-center gap-2 px-12 py-4"
        >
          {buttonTextByLocale}
          <Image
            alt="Action button"
            src="/assets/img/greymatter-button-action.svg"
            width="20"
            height="20"
          />
        </Link>
        <div />
      </Container>
    </Section>
  );
}

export default Application;
