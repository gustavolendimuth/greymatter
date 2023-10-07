/* eslint-disable import/prefer-default-export */

import authorType from 'schemas/documents/author';
import settingsType from 'schemas/documents/blogSettings';
import postType from 'schemas/documents/post';

import video from './components/VideoPreview';
import application from './documents/application';
import applicationForm from './documents/applicationForm';
import community from './documents/community';
import communityMembers from './documents/communityMembers';
import footer from './documents/footer';
import hero from './documents/hero';
import howWeInvest from './documents/howWeInvest';
import intro from './documents/intro';
import siteSettings from './documents/siteSettings';
import team from './documents/team';
import teamMembers from './documents/teamMembers';
import whatDoWeOffer from './documents/whatDoWeOffer';
import whatWeLookFor from './documents/whatWeLookFor';
import whoWeAre from './documents/whoWeAre';
import applicationFormFields from './objects/applicationFormFields';
import background from './objects/background';
import { blogDescription } from './objects/blogDescription';
import card from './objects/card';
import cardNoText from './objects/cardNoText';
import communityMembersFields from './objects/communityMembersFields';
import figure from './objects/figure';
import figureWithSizes from './objects/figureWithSizes';
import { postContent } from './objects/postContent';
import preview from './objects/preview';
import richText from './objects/richText';
import teamMembersFields from './objects/teamMembersFields';

export const schemaTypes = [
  applicationFormFields,
  blogDescription,
  postContent,
  card,
  cardNoText,
  richText,
  figureWithSizes,
  figure,
  background,
  preview,
  video,
  teamMembersFields,
  communityMembersFields,
  siteSettings,
  hero,
  intro,
  whoWeAre,
  whatWeLookFor,
  whatDoWeOffer,
  howWeInvest,
  team,
  teamMembers,
  community,
  communityMembers,
  authorType,
  postType,
  settingsType,
  application,
  applicationForm,
  footer,
];
