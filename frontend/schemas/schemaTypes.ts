/* eslint-disable import/prefer-default-export */

import authorType from 'schemas/documents/author';
import postType from 'schemas/documents/posts';

import application from './documents/application';
import applicationForm from './documents/applicationForm';
import blogSettings from './documents/blogSettings';
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
import blogDescription from './objects/blogDescription';
import card from './objects/card';
import heroVideo from './objects/heroVideo';
import postContent from './objects/postContent';
import richText from './objects/richText';
import video from './objects/video';

export const schemaTypes = [
  heroVideo,
  applicationFormFields,
  blogDescription,
  postContent,
  card,
  richText,
  video,
  siteSettings,
  blogSettings,
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
  application,
  applicationForm,
  footer,
];
