import './Community.css';

import { PortableText } from '@portabletext/react';
import BackgroundImage from 'app/_components/BackgroundImage';
import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import { getClient } from 'lib/sanityClient';
import { getCommunity } from 'lib/sanityFetch';
import { CommunitySection } from 'types/sectionsTypes';
// import { Tooltip } from 'react-tooltip';
import sortMembers from 'utils/sort';

import CommunityCards from './components/CommunityCards';

export default function Community({ data }: { data: CommunitySection }) {
  const { title, text, community, background } = data;

  const sortedMembers = sortMembers(community.members, JSON.parse(community.sort));

  if (!sortedMembers || !title) return null;

  return (
    <Section id="community" className="relative">
      <BackgroundImage image={background} />
      <Container justify gap fullHeight className="lg:max-w-[1200px]">
        <div />
        <Title className="text-deep-blue">{title}</Title>
        <div className="max-w-[768px] text-ternary self-center flex flex-col gap-2 md:gap-5 text-center lg:text-left text-lg md:text-xl lg:text-2xl">
          {text && <PortableText value={text} />}
        </div>
        {/* <Tooltip
          anchorSelect=".community-card-tooltip"
          className="community-tooltip"
        /> */}
        <CommunityCards members={sortedMembers} />
        <DownArrow className="fill-deep-blue" to="#portfolio" />
      </Container>
    </Section>
  );
}
