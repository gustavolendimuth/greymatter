/* eslint-disable import/prefer-default-export */
import { getClient } from 'lib/sanityClient';
import { SanityClient } from 'next-sanity';
import { BlogCategory } from 'types/componentsTypes';
import {
  ApplicationSection,
  BlogSettings,
  CommunitySection,
  Footer,
  HeroSection,
  HowWeInvestSection,
  IntroSection,
  PortfolioSection,
  Post,
  SiteSettings,
  TeamSection,
  WhatDoWeOfferSection,
  WhatWeLookForSection,
  WhoWeAreSection,
} from 'types/sectionsTypes';

import {
  allPostsQuery,
  applicationQuery,
  BlogSettingsQuery,
  communityQuery,
  footerQuery,
  heroQuery,
  howWeInvestQuery,
  introQuery,
  newsSettingsQuery,
  portfolioQuery,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  siteSettingsQuery,
  teamQuery,
  whatDoWeOfferQuery,
  whatWeLookForQuery,
  whoWeAreQuery,
} from './sanityQueries';

export type Category = 'insights' | 'news';

export async function getSiteSettings(client: SanityClient): Promise<SiteSettings> {
  return client.fetch(siteSettingsQuery);
}

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

export async function getPortfolio(client: SanityClient, locale: string): Promise<PortfolioSection> {
  return client.fetch(portfolioQuery, { locale });
}

export async function getBlogSettings(
  client: SanityClient,
  locale: string,
  category: BlogCategory
): Promise<BlogSettings> {
  return (await client.fetch(BlogSettingsQuery(category), { locale })) || {};
}

export async function getNewsSettings(client: SanityClient, locale: string): Promise<BlogSettings> {
  return (await client.fetch(newsSettingsQuery, { locale })) || {};
}

export async function getAllPosts(client: SanityClient, locale: string, category: Category): Promise<Post[]> {
  return (await client.fetch(allPostsQuery, { locale, category })) || [];
}

export async function getAllPostsSlugs(category: Category): Promise<Pick<Post, 'slug'>[]> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(postSlugsQuery, { category })) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getPostBySlug(client: SanityClient, slug: string, locale: string): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug, locale })) || ({} as any);
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string,
  locale: string,
  category: Category
): Promise<{ post: Post; morePosts: Post[] }> {
  return client.fetch(postAndMoreStoriesQuery, { slug, locale, category });
}

export async function getApplication(client: SanityClient, locale: string): Promise<ApplicationSection> {
  return client.fetch(applicationQuery, { locale });
}

export async function getFooter(client: SanityClient, locale: string): Promise<Footer> {
  return client.fetch(footerQuery, { locale });
}
