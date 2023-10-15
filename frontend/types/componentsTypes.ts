import { Url } from 'url';

import {
  ImageType,
  LocalizedObject,
  TypedObject,
} from './propertiesTypes';

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

export type TeamMemberComponent = {
  name: string;
  image: ImageType;
  position: string;
  linkedin: Url | null;
  bio: string;
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
