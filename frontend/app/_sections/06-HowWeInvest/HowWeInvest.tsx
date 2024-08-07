/* eslint-disable react-hooks/exhaustive-deps */

import './HowWeInvest.css';

import BackgroundImage from 'app/_components/BackgroundImage';
import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import { HowWeInvestSection } from 'types/sectionsTypes';

import HowWeInvestTree from './components/HowWeInvestTree';

export default function HowWeInvest({ data }: { data: HowWeInvestSection }) {
  const { title, cards, firstCard, background } = data;

  if (!title || !cards) return null;

  return (
    <Section className="relative bg-grey" id="how-we-invest">
      <BackgroundImage image={background} />
      <Container gap fullHeight className="max-w-[1200px]">
        <div className="spacer" />
        <Title className="text-primary">{title}</Title>
        <HowWeInvestTree cards={cards} firstCard={firstCard} />
        <DownArrow className="fill-primary" to="#team" />
      </Container>
    </Section>
  );
}
