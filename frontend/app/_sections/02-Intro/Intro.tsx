import BackgroundImage from 'app/_components/BackgroundImage';
import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Img from 'app/_components/Img';
import Section from 'app/_components/Section';
import TextFill from 'app/_components/TextFill';
import { IntroSection } from 'types/sectionsTypes';

export default function Intro({ data }: { data: IntroSection }) {
  const { background, logo, text, subtitle } = data;

  return (
    <Section className="relative" id="intro">
      <BackgroundImage image={background} />
      <Container justify fullHeight>
        <div />
        <div className="my-5 flex justify-center">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-5">
            <div className="flex justify-center lg:justify-start">
              <Img
                alt={logo?.alt}
                width={404}
                image={logo}
                height={175}
              />
            </div>
            <div className="text-lg md:text-xl lg:text-2xl leading-8 md:leading-9 lg:leading-10 text-center lg:text-start text-white max-w-[590px]">
              <TextFill text={text} height={250} width={590} fontSize={23} lineHeight={1.8} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[790px]">
          <div className="text-white text-lg md:text-2xl font-900 text-center leading-7 lg:leading-10">
            <TextFill text={subtitle} height={85} width={790} fontSize={33} lineHeight={2.5} />
          </div>
          <DownArrow to="#who-we-are" />
        </div>
      </Container>
    </Section>
  );
}