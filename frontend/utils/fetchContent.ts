/* eslint-disable no-prototype-builtins */
import {
  ApplicationPage,
  CommunityPage,
  FooterComponent,
  HeroPage,
  HowWeInvestPage,
  IntroPage,
  TeamPage,
  WhatDoWeOfferPage,
} from 'types/componentsTypes';

import sanityClient from './sanityClient';

type QueryType = 'team' | 'community' | 'hero';
type FetchContent =
  | TeamPage
  | CommunityPage
  | HeroPage
  | ApplicationPage
  | IntroPage
  | WhatDoWeOfferPage
  | FooterComponent
  | HowWeInvestPage
  | null;

const fetchContent = async (doc: string): Promise<FetchContent> => {
  const teamQuery = `*[_type == "team"] | order(_createdAt asc)[0] {
        title,
        'members':teamMembers.teamMembers[]->{name, alt, photoLg, position, linkedin, text, slug },
      }`;

  const communityQuery = `*[_type == "community"] | order(_createdAt asc)[0] {
        title, text, image, communityMembers,
        'members':communityMembers.communityMembers[]->{name, alt, photoLg, position, linkedin, text, slug }
      }`;

  const heroQuery = `*[_type == "hero"] | order(_createdAt asc)[0] {
        background, image, subTitle, text, title,
        "backgroundVideo": { 
          "landscapeVideo": backgroundVideo.landscapeVideo.asset->url,
          "portraitVideo": backgroundVideo.portraitVideo.asset->url
        }
      }`;

  const genericQuery = `*[_type == "${doc}"] | order(_createdAt asc)[0]`;

  const query: Record<QueryType, string> = {
    team: teamQuery,
    community: communityQuery,
    hero: heroQuery,
  };

  if (doc) {
    try {
      const response = await sanityClient.fetch(
        query.hasOwnProperty(doc as QueryType)
          ? query[doc as QueryType]
          : genericQuery,
      );
      return response;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  return null;
};

export default fetchContent;
