/* eslint-disable no-prototype-builtins */
/* eslint-disable react-hooks/exhaustive-deps */

import './Team.css';

import BackgroundImage from 'app/_components/BackgroundImage';
import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import { TeamSection } from 'types/sectionsTypes';

import TeamCards from './components/TeamCards';

export default function Team({ data }: { data: TeamSection }) {
  const { team, background, title } = data;

  if (!title || !team) return null;

  return (
    <Section id="team" className="relative">
      <BackgroundImage className="object-bottom mix-blend-overlay" backgroundColor="bg-ternary" image={background} />
      <Container
        justify
        gap
        fullHeight
        className="max-w-[400px] sm:max-w-[650px] lg:max-w-[920px]"
        id="team-container"
      >
        <div />
        <Title>{title}</Title>
        <TeamCards team={team} />
        <DownArrow to="#community" />
      </Container>
    </Section>
  );
}
