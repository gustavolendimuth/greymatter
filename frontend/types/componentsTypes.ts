import {
  BackgroundType,
  ImageAsset,
  ImageType,
  ImageWithSizes,
  TypedObject,
} from './propertiesTypes';

export type HeroPage = {
  title: string;
  backgroundVideo: {
    landscapeVideo: string;
    portraitVideo: string;
  };
};

export type IntroPage = {
  language: string;
  title: string;
  text: TypedObject;
  subTitle: string;
  image: ImageWithSizes;
  background: BackgroundType;
};

export type WhoWeArePage = {
  title: string;
  text: TypedObject;
  image: ImageWithSizes;
};

export type WhatWeLookForCardsComponent = {
  image: ImageWithSizes;
  text?: TypedObject;
}[];

export type WhatWeLookForPage = {
  title: string;
  background: TypedObject;
  cards: WhatWeLookForCardsComponent;
};

export interface WhatDoWeOfferCardComponent {
  image?: ImageWithSizes;
  alt?: string;
  title?: string;
}

export type WhatDoWeOfferPage = {
  title: string;
  cards: WhatDoWeOfferCardComponent[];
};

export type HowWeInvestCard = {
  cardImage?: {
    image: ImageType;
    alt?: string;
  };
  text?: TypedObject;
};

export type HowWeInvestPage = {
  title: string;
  cards: HowWeInvestCard[]
  firstCard: HowWeInvestCard;
};

export type TeamMemberComponent = {
  name: string;
  alt: string;
  photoLg: string;
  position: string;
  linkedin: string;
  text: TypedObject;
  slug: {
    current: string;
  };
};

export type TeamPage = {
  title: string;
  members: TeamMemberComponent[];
};

export type CommunityMemberComponent = {
  name: string;
  alt: string;
  photoLg: ImageAsset;
  position: string;
  linkedin: string;
  text: TypedObject;
  slug: string;
  index: number;
  key: number;
};

export type CommunityPage = {
  title: string;
  text: TypedObject;
  image: ImageType;
  communityMembers: { sort: string };
  members: CommunityMemberComponent[];
};

export type ApplicationPage = {
  title?: string;
  text?: TypedObject;
  image?: ImageType;
  buttonText?: string;
};

export type FooterComponentLogo = {
  alt: string;
  image: ImageType;
};

export type FooterComponent = {
  formButton: string;
  formText: TypedObject;
  logo: FooterComponentLogo
};
