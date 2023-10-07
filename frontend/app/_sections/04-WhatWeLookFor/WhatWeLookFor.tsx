'use client';

import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import useScrollTo from 'app/_Hooks/useScrollTo';
import { useHomeContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import {
  WhatWeLookForCardsComponent,
  WhatWeLookForPage,
} from 'types/componentsTypes';
import fetchContent from 'utils/fetchContent';
import urlFor from 'utils/urlFor';

import WhatWeLookForCards from './components/WhatWeLookForCards';

export default function WhatWeLookFor() {
  const [whatWeLookForTitle, setWhatWeLookForTitle] = useState<string | undefined>();
  const [whatWeLookForBackground, setWhatWeLookForBackground] = useState<any | undefined>();
  const [whatWeLookForCardsData, setWhatWeLookForCardsData] = useState<WhatWeLookForCardsComponent | undefined>();

  useScrollTo();
  const { languageId } = useHomeContext();

  useEffect(() => {
    const getWhatWeLookForContent = async () => {
      const data = (await fetchContent(
        'whatWeLookFor',
        languageId,
      )) as WhatWeLookForPage;
      if (data) {
        setWhatWeLookForTitle(data.title);
        setWhatWeLookForBackground(data.background);
        setWhatWeLookForCardsData(data.cards);
      }
    };
    getWhatWeLookForContent();
  }, [languageId]);

  if (!whatWeLookForTitle || !whatWeLookForCardsData) return null;

  const sectionBackground = whatWeLookForBackground && urlFor(whatWeLookForBackground?.imageLg).url();

  return (
    <Section
      id="what-we-look-for"
      style={{
        background: `url(${sectionBackground}) center / cover space`,
      }}
      className="relative"
    >
      <Container gap fullHeight justify>
        <div />
        <Title className=" text-white">{whatWeLookForTitle}</Title>
        <WhatWeLookForCards cards={whatWeLookForCardsData} />
        <div>
          <DownArrow to="#what-do-we-offer" />
        </div>
      </Container>
    </Section>
  );
}
