/* eslint-disable import/prefer-default-export */

import { getClient } from 'lib/sanityClient';
import { SanityClient } from 'next-sanity';
import {
  ApplicationSection,
  BlogSettings,
  CommunitySection,
  Footer,
  HeroSection,
  HowWeInvestSection,
  IntroSection,
  Post,
  SiteSettings,
  TeamSection,
  WhatDoWeOfferSection,
  WhatWeLookForSection,
  WhoWeAreSection,
} from 'types/sectionsTypes';

import {
  applicationQuery,
  blogSettingsQuery,
  communityQuery,
  footerQuery,
  heroQuery,
  howWeInvestQuery,
  indexQuery,
  introQuery,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  siteSettingsQuery,
  teamQuery,
  whatDoWeOfferQuery,
  whatWeLookForQuery,
  whoWeAreQuery,
} from './sanityQueries';

export async function getHero(client: SanityClient, locale: string): Promise<HeroSection> {
  return client.fetch(heroQuery, { locale });
}

export async function getIntro(client: SanityClient, locale: string): Promise<IntroSection> {
  return client.fetch(introQuery, { locale });
}

export async function getWhoWeAre(client: SanityClient, locale: string): Promise<WhoWeAreSection> {
  return client.fetch(whoWeAreQuery, { locale });
}

export async function getWhatWeLookFor(client: SanityClient, locale: string): Promise<WhatWeLookForSection> {
  return client.fetch(whatWeLookForQuery, { locale });
}

export async function getWhatDoWeOffer(client: SanityClient, locale: string): Promise<WhatDoWeOfferSection> {
  return client.fetch(whatDoWeOfferQuery, { locale });
}

export async function getHowWeInvest(client: SanityClient, locale: string): Promise<HowWeInvestSection> {
  return client.fetch(howWeInvestQuery, { locale });
}

export async function getTeam(client: SanityClient, locale: string): Promise<TeamSection> {
  return client.fetch(teamQuery, { locale });
}

export async function getCommunity(client: SanityClient, locale: string): Promise<CommunitySection> {
  return client.fetch(communityQuery, { locale });
}

export async function getApplication(client: SanityClient): Promise<ApplicationSection> {
  return client.fetch(applicationQuery);
}

export async function getBlogSettings(client: SanityClient): Promise<BlogSettings> {
  return (await client.fetch(blogSettingsQuery)) || {};
}

export async function getSiteSettings(client: SanityClient): Promise<SiteSettings> {
  return client.fetch(siteSettingsQuery);
}

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || [];
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getPostBySlug(client: SanityClient, slug: string): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
}

export async function getPostAndMoreStories(client: SanityClient, slug: string): Promise<{ post: Post; morePosts: Post[] }> {
  return client.fetch(postAndMoreStoriesQuery, { slug });
}

export async function getFooter(client: SanityClient, locale: string): Promise<Footer> {
  return client.fetch(footerQuery, { locale });
}
