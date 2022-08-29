/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Pages
import language from './documents/language';
import hero from './documents/hero';
import siteSettings from './documents/siteSettings';
import whoWeAre from './documents/whoWeAre';
import whatWeLookFor from './documents/whatWeLookFor';
import whatDoWeOffer from './documents/whatDoWeOffer';
import team from './documents/team';
import teamMembers from './documents/teamMembers';
import community from './documents/community';
import communityMembers from './documents/communityMembers';
import application from './documents/application';

// Fields
import richText from './objects/richText';
import figure from './objects/figure';
import youtube from './objects/youtube';
import card from './objects/card';
import preview from './objects/preview';
import video from './objects/video';
import teamMembersObject from './objects/teamMembersObject';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    language,
    siteSettings,
    hero,
    whoWeAre,
    whatWeLookFor,
    whatDoWeOffer,
    team,
    teamMembers,
    community,
    communityMembers,
    application,
    card,
    richText,
    figure,
    youtube,
    preview,
    video,
    teamMembersObject,
  ]),
});
