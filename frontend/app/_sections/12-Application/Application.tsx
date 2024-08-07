import { PortableText } from '@portabletext/react';
import Container from 'app/_components/Container';
import Img from 'app/_components/Img';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import Image from 'next/image';
import Link from 'next/link';
import { ApplicationSection } from 'types/sectionsTypes';

export function Application({ data }: { data: ApplicationSection }) {
  const { title, text, image, buttonText } = data;

  if (!title || !text) return null;

  return (
    <Section id="application" className="bg-primary">
      <Container gap>
        <div />
        <Title className="text-white">{title}</Title>
        <Img
          alt={image?.alt || 'Application image'}
          image={image}
          width={image?.width || 200}
          height={image?.height || 200}
        />
        <div className="text-center text-info text-2xl mx-auto max-w-[767px]">
          {text && <PortableText value={text} />}
        </div>
        <Link
          href="/application-form"
          className="uppercase font-600 bg-primary text-white rounded-lg border-2 flex items-center gap-2 px-12 py-4"
        >
          {buttonText}
          <Image alt="Action button" src="/assets/img/greymatter-button-action.svg" width="20" height="20" />
        </Link>
        <div />
      </Container>
    </Section>
  );
}

export default Application;
