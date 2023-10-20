import {
  BlogCategory,
  CommunityMemberComponent,
  HowWeInvestCardComponent,
  TeamMemberComponent,
  WhatDoWeOfferCardComponent,
  WhatWeLookForCardComponent,
} from './componentsTypes';
import { BackgroundType, ImageType, SortOptions, TypedObject } from './propertiesTypes';

export type HeroVideo = {
  landscape: string;
  portrait: string;
};

export type HeroSection = {
  video: HeroVideo;
};

export type IntroSection = {
  title: string;
  text: TypedObject;
  subtitle: string;
  logo: ImageType;
  background: BackgroundType | null;
};

export type WhoWeAreSection = {
  title: string;
  text: TypedObject;
  image: ImageType;
  background: BackgroundType | null;
};

export type WhatWeLookForSection = {
  title: string;
  cards: WhatWeLookForCardComponent[];
  background: BackgroundType | null;
};

export type WhatDoWeOfferSection = {
  title: string;
  cards: WhatDoWeOfferCardComponent[];
  background: BackgroundType | null;
};

export type HowWeInvestSection = {
  title: string;
  firstCard: ImageType;
  cards: HowWeInvestCardComponent[];
  background: BackgroundType | null;
};

export type TeamSection = {
  title: string;
  team: {
    members: TeamMemberComponent[];
    sort: SortOptions;
  };
  background: BackgroundType | null;
};

export type CommunitySection = {
  title: string;
  text: TypedObject;
  community: {
    members: CommunityMemberComponent[];
    sort: SortOptions;
  };
  background: BackgroundType | null;
};

export type ApplicationSection = {
  title: string;
  text: TypedObject;
  image: ImageType;
  buttonText: string;
  background: BackgroundType | null;
};

export type Author = {
  name?: string;
  picture?: any;
};

export type Post = {
  _id: string;
  title: string;
  coverImage?: any;
  date?: string;
  _updatedAt?: string;
  excerpt?: string;
  author?: Author;
  slug: string;
  content?: TypedObject;
  category: BlogCategory;
};

export type BlogSettings = {
  title: string;
  description: TypedObject;
};

export type SiteSettings = {
  title: string;
  description: TypedObject;
  logo: ImageType;
  keywords?: string[];
  ogImage?: {
    title?: string;
  };
};

export type Footer = {
  logo?: ImageType;
  formText?: TypedObject;
};

export interface Settings {
  title?: string;
  description?: any[];
  ogImage?: {
    title?: string;
  };
}
