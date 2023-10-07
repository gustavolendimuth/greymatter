'use client';

import { PortableText } from '@portabletext/react';
import Container from 'app/_components/Container';
import Img from 'app/_components/Img';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import useScrollTo from 'app/_Hooks/useScrollTo';
import { useHomeContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { WhoWeArePage } from 'types/componentsTypes';
import {
  ImageWithSizes,
  TypedObject,
} from 'types/propertiesTypes';

import fetchContent from '../../../utils/fetchContent';
import DownArrow from '../../_components/DownArrow';

function WhoWeAre() {
  const [whoWeArePageTitle, setWhoWeArePageTitle] = useState<string | null>(null);
  const [whoWeAreText, setWhoWeAreText] = useState<TypedObject | null>(null);
  const [whoWeAreImage, setWhoWeAreImage] = useState<ImageWithSizes>();

  useScrollTo();
  const { languageId } = useHomeContext();

  useEffect(() => {
    async function getWhoWeAreContent() {
      const data = (await fetchContent('whoWeAre', languageId)) as WhoWeArePage;
      if (data) {
        setWhoWeArePageTitle(data.title);
        setWhoWeAreImage(data.image);
        setWhoWeAreText(data.text);
      }
    }
    getWhoWeAreContent();
  }, [languageId]);

  if (!whoWeArePageTitle || !whoWeAreText) return null;

  return (
    <Section id="who-we-are">
      <Container justify gap fullHeight>
        <div />
        <Title>{whoWeArePageTitle}</Title>
        <div className="flex flex-col lg:flex-row gap-8 max-w-[760px]">
          <div className="w-ful lg:w-7/12">
            <div className="text-xl md:text-2xl text-primary text-center leading-7 lg:leading-10 lg:text-left flex justify-center content-center">
              <PortableText value={whoWeAreText} />
            </div>
          </div>
          <div className="w-full lg:w-[284px] lg:h-[180px] flex justify-center order-first lg:order-last">
            <Img
              className="rounded-lg"
              image={whoWeAreImage?.imageLg}
              alt={whoWeAreImage?.alt || 'Who we are'}
              width={284}
              size={[284, 180]}
            />
          </div>
        </div>
        <DownArrow className="fill-grey" to="#what-we-look-for" />
      </Container>
    </Section>
  );
}

export default WhoWeAre;
