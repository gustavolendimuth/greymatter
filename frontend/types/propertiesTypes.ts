import { NextRouter } from 'next/router';

export interface TypedObject {
  _type: string;
  _key?: string;
}

export type BackgroundType = {
  image?: ImageType;
  heightLimit?: boolean;
  alignToTop?: boolean;
  alt?: string;
  color?: {
    hex?: string;
    rgb?: RGBType;
  };
};

export type ImageWithSizes = {
  imageSm?: ImageType;
  imageLg?: ImageType;
  alt: string;
};

export type ImageAsset = {
  _ref: string;
  _type: string;
};

export type ImageType = {
  asset: ImageAsset;
  alt: string;
  width?: number;
  height?: number;
};

export type RGBType = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export interface SectionsProps {
  languageId: string;
  section?: any;
  router?: NextRouter;
}
