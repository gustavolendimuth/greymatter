import { PortableText } from '@portabletext/react';
import BackgroundImage from 'app/_components/BackgroundImage';
import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Img from 'app/_components/Img';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import { WhoWeAreSection } from 'types/sectionsTypes';

export function WhoWeAre({ data }: { data: WhoWeAreSection }) {
  const { title, text, image, background } = data;

  if (!title || !text) return null;

  return (
    <Section className="relative" id="who-we-are">
      <BackgroundImage image={background} />
      <Container justify gap fullHeight>
        <div />
        <Title>{title}</Title>
        <div className="flex flex-col lg:flex-row gap-8 max-w-[760px]">
          <div className="w-full lg:w-[410px] text-xl md:text-2xl text-primary text-center leading-7 lg:leading-9 lg:text-left flex justify-center content-center">
            <PortableText value={text} />
          </div>
          <div className="w-full lg:w-[284px] lg:h-[180px] flex justify-center order-first lg:order-last">
            <Img
              className="rounded-lg"
              image={image}
              alt={image.alt || 'Who we are'}
              width={300}
              height={300}
            />
          </div>
        </div>
        <DownArrow className="fill-grey" to="#what-we-look-for" />
      </Container>
    </Section>
  );
}
