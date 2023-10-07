'use client';

import { PortableText } from '@portabletext/react';
import Container from 'app/_components/Container';
import Img from 'app/_components/Img';
import Section from 'app/_components/Section';
import useScrollTo from 'app/_Hooks/useScrollTo';
import { useHomeContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { IntroPage } from 'types/componentsTypes';
import {
  BackgroundType,
  ImageWithSizes,
  // RGBType,
  TypedObject,
} from 'types/propertiesTypes';

import fetchContent from '../../../utils/fetchContent';
import DownArrow from '../../_components/DownArrow';

function Intro() {
  const [IntroText, setIntroText] = useState<TypedObject | undefined>();
  const [introImage, setIntroImage] = useState<ImageWithSizes | undefined>();
  const [introSubtitle, setIntroSubtitle] = useState<string | undefined>();
  // const [introBackgroundColor, setIntroBackgroundColor] = useState<RGBType | undefined>();
  const [introBackground, setIntroBackground] = useState<BackgroundType | undefined>();
  // const windowWidth: number = window.innerWidth;
  const windowWidth: number = 1900;

  useScrollTo();
  const { languageId } = useHomeContext();

  useEffect(() => {
    async function getHeroContent() {
      const data = (await fetchContent('hero')) as IntroPage;
      if (data) {
        setIntroBackground(data.background);
        setIntroText(data.text);
        setIntroImage(data.image);
        setIntroSubtitle(data.subTitle);
        // setIntroBackgroundColor(data.background.color?.rgb);
      }
    }
    getHeroContent();
  }, [languageId]);

  const backgroundHeight = `${introBackground?.heightLimit ? 'h-screen' : ''} ${
    introBackground?.alignToTop ? 'top-0' : ''
  }`;

  // const backgroundColor = introBackgroundColor
  //   ? `rgba(${introBackgroundColor.r}, ${introBackgroundColor.g}, ${introBackgroundColor.b}, ${introBackgroundColor.a})`
  //   : 'transparent';

  return (
    <Section className="relative" id="intro">
      <Img
        image={introBackground?.image}
        className={`${backgroundHeight} absolute w-full z-[-1] h-[200vh] object-cover object-center]`}
        alt={introBackground?.alt || ''}
        size={[2200, 2200]}
        width={2200}
      />
      <Container justify fullHeight>
        <div />
        <div className="my-5 flex justify-center">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-5">
            <div className="flex justify-center lg:justify-start max-w-[404]">
              <Img
                width={404}
                image={
                  windowWidth <= 992
                    ? introImage?.imageSm || introImage?.imageLg
                    : introImage?.imageLg
                }
                alt={introImage?.alt || ''}
              />
            </div>
            <div className="text-lg md:text-xl lg:text-2xl leading-8 md:leading-9 lg:leading-10 text-center lg:text-start text-white max-w-[590px]">
              {IntroText && <PortableText value={IntroText} />}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[760px]">
          <p className="text-white text-xl md:text-2xl font-900 text-center leading-7 lg:leading-10">
            {introSubtitle}
          </p>
          <DownArrow to="#who-we-are" />
        </div>
      </Container>
    </Section>
  );
}

export default Intro;
