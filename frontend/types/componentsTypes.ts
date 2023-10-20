import { Url } from 'url';

import { ImageType, LocalizedObject, TypedObject } from './propertiesTypes';

export type WhatWeLookForCardComponent = {
  image: ImageType;
  text: TypedObject;
  title: string;
};

export interface WhatDoWeOfferCardComponent {
  image: ImageType;
  text: TypedObject;
  title: string;
}

export type HowWeInvestCardComponent = {
  image: ImageType;
  text: TypedObject;
  title: string;
};

export type BlogCategory = 'insights' | 'news';

export type TeamMemberComponent = {
  _id: string;
  name: string;
  image: ImageType;
  position: string;
  linkedin: Url | null;
  bio: TypedObject;
  slug: {
    current: string;
  };
};

export type CommunityMemberComponent = {
  name: string;
  alt: string;
  image: ImageType;
  position: string;
  linkedin: Url | null;
  slug: {
    current: string;
  };
};

export type FooterComponent = {
  formButton: LocalizedObject<string>;
  formText: LocalizedObject<string>;
  logo: ImageType;
};
