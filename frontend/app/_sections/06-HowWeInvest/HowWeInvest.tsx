'use client';

import './HowWeInvest.css';

import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import useScrollTo from 'app/_Hooks/useScrollTo';
import { useHomeContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { HowWeInvestPage } from 'types/componentsTypes';
import fetchContent from 'utils/fetchContent';

import HowWeInvestTree from './components/HowWeInvestTree';

export default function HowWeInvest() {
  const [howWeInvestPageTitle, setHowWeInvestPageTitle] = useState<string | undefined>();
  const [howWeInvestCards, setHowWeInvestCards] = useState<any[] | undefined>();
  const [howWeInvestFirstCard, setHowWeInvestFirstCard] = useState<any | undefined>();

  useScrollTo();
  const { languageId } = useHomeContext();

  useEffect(() => {
    const getHowWeInvestContent = async () => {
      if (!languageId) return;
      const data = await fetchContent('howWeInvest', languageId) as HowWeInvestPage;
      if (data) {
        setHowWeInvestPageTitle(data.title);
        setHowWeInvestCards(data.cards);
        setHowWeInvestFirstCard(data.firstCard);
      }
    };
    getHowWeInvestContent();
  }, [languageId]);

  if (!howWeInvestPageTitle || !howWeInvestCards) return null;

  return (
    <Section className="relative bg-grey" id="how-we-invest">
      <Container gap fullHeight className="max-w-[1200px]">
        <div />
        <Title className="text-white">
          {howWeInvestPageTitle}
        </Title>
        <HowWeInvestTree
          cards={howWeInvestCards}
          firstCard={howWeInvestFirstCard}
        />
        <DownArrow className="fill-primary" to="#team" />
      </Container>
    </Section>
  );
}
