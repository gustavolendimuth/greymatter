/* eslint-disable no-prototype-builtins */
/* eslint-disable react-hooks/exhaustive-deps */

import './Team.css';

import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import { TeamPage } from 'types/componentsTypes';
import fetchContent from 'utils/fetchContent';

import TeamCard from './components/TeamCard';

export default async function Team() {
  const { members, title } = (await fetchContent('team')) as TeamPage;

  return (
    <Section
      id="team"
      style={{
        background: 'url("/assets/img/greymatter-what-we-look-for-background-v2.webp") bottom / cover no-repeat',
        backgroundBlendMode: 'overlay',
        backgroundColor: '#17365d',
      }}
    >
      <Container
        justify
        gap
        fullHeight
        className="max-w-[400px] sm:max-w-[650px] lg:max-w-[920px]"
        id="team-container"
      >
        <div />
        <Title>{title}</Title>
        <div className="flex flex-wrap gap-x-16 md:gap-x-20 lg:gap-x-24 gap-y-10 lg:gap-y-12 justify-center items-center pb-5">
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
        <DownArrow to="#community" />
      </Container>
    </Section>
  );
}
