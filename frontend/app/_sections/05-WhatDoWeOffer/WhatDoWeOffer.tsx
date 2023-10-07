'use client';

import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import useScrollTo from 'app/_Hooks/useScrollTo';
import { useHomeContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { WhatDoWeOfferCardComponent, WhatDoWeOfferPage } from 'types/componentsTypes';
import fetchContent from 'utils/fetchContent';

import WhatDoWeOfferCard from './components/WhatDoWeOfferCard';

export function WhatDoWeOffer() {
  const [whatDoWeOfferPageTitle, setWhatDoWeOfferPageTitle] = useState<string | undefined>();
  const [whatDoWeOfferCards, setWhatDoWeOfferCards] = useState<WhatDoWeOfferCardComponent[] | undefined>();

  useScrollTo();
  const { languageId } = useHomeContext();

  useEffect(() => {
    const getWhatDoWeOfferContent = async () => {
      const data = await fetchContent('whatDoWeOffer') as WhatDoWeOfferPage;
      if (data) {
        setWhatDoWeOfferPageTitle(data.title);
        setWhatDoWeOfferCards(data.cards);
      }
    };
    getWhatDoWeOfferContent();
  }, [languageId]);

  if (!whatDoWeOfferPageTitle || !whatDoWeOfferCards) return null;

  return (
    <Section id="what-do-we-offer">
      <Container fullHeight gap justify>
        <div />
        <Title className="text-primary">{whatDoWeOfferPageTitle}</Title>
        <div className="lg:gap-10 justify-center px-10 flex flex-wrap gap-3 md:gap-5">
          {whatDoWeOfferCards.map((card, index) => (
            <WhatDoWeOfferCard key={index} card={card} />
          ))}
        </div>
        <DownArrow className="fill-primary" to="#how-we-invest" />
      </Container>
    </Section>
  );
}

export default WhatDoWeOffer;
