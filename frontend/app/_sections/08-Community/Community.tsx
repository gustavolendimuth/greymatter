'use client';

import './Community.css';

import { PortableText } from '@portabletext/react';
import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import useScrollTo from 'app/_Hooks/useScrollTo';
import { useHomeContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { CommunityMemberComponent, CommunityPage } from 'types/componentsTypes';
import { TypedObject } from 'types/propertiesTypes';
import fetchContent from 'utils/fetchContent';
import sortCompare from 'utils/sortCompare';

import CommunityCard from './components/CommunityCard';

export default function Community() {
  const [communityPageTitle, setCommunityPageTitle] = useState<string>();
  const [communityText, setCommunityText] = useState<TypedObject>();
  const [communityMembers, setCommunityMembers] = useState<CommunityMemberComponent[]>();

  useScrollTo();
  const { languageId } = useHomeContext();

  function sortMembers(members: CommunityMemberComponent[], sort: string) {
    if (sort === 'custom') return members;

    const sortedMembers = members.sort(sortCompare('name'));
    return sortedMembers;
  }

  useScrollTo();

  useEffect(() => {
    const getCommunityContent = async () => {
      const data = (await fetchContent(
        'community',
        languageId,
      )) as CommunityPage;
      if (data) {
        setCommunityPageTitle(data.title);
        setCommunityText(data.text);
        setCommunityMembers(
          sortMembers(data.members, data.communityMembers.sort),
        );
      }
    };
    getCommunityContent();
  }, [languageId]);

  if (!communityMembers || !communityPageTitle) return null;

  return (
    <Section id="community" className="relative">
      <Container justify gap fullHeight className="lg:max-w-[1200px]">
        <div />
        <Title className="text-deep-blue">{communityPageTitle}</Title>
        <div className="max-w-[768px] text-ternary self-center flex flex-col gap-2 md:gap-5 text-center lg:text-left text-lg md:text-xl lg:text-2xl">
          {communityText && <PortableText value={communityText} />}
        </div>
        <Tooltip
          anchorSelect=".community-card-tooltip"
          className="community-tooltip"
        />
        <div className="flex flex-wrap gap-8 justify-center w-[350px] sm:w-auto">
          {communityMembers.map((member, index) => (
            <CommunityCard key={index} member={member} />
          ))}
        </div>
        <DownArrow className="fill-deep-blue" to="#portfolio" />
      </Container>
    </Section>
  );
}
