/* eslint-disable react-func/max-lines-per-function */
import sanityClient from './sanityClient';

const fetchContent = async (doc, languageId) => {
  const preview = process.env.REACT_APP_PREVIEW === 'true';

  const languageQuery = `*[_type == "language"] {
      abbreviation, code, language, _id }`;

  const teamQuery = `*[_type == "team" 
      && language._ref == "${languageId}" 
      && preview.isPreview == ${preview}] | order(_createdAt asc)[0] {
      pageTitle,
      'members':teamMembers.teamMembers[]->{name, alt, photoLg, position, linkedin, text, slug },
      }`;

  const communityQuery = `*[_type == "community" 
      && language._ref == "${languageId}" 
      && preview.isPreview == ${preview}] | order(_createdAt asc)[0] {
      pageTitle, text, image, communityMembers,
      'members':communityMembers.communityMembers[]->{name, alt, photoLg, position, linkedin, text, slug }
      }`;

  const heroQuery = `*[_type == "hero" 
      && language._ref == "${languageId}" 
      && preview.isPreview == ${preview}] | order(_createdAt asc)[0] {
      background, image, pageTitle, subTitle, text, title,
      "backgroundVideo": backgroundVideo.asset->url
      }`;

  const genericQuery = `*[_type == "${doc}" 
      && language._ref == "${languageId}" 
      && preview.isPreview == ${preview}] | order(_createdAt asc)[0]`;

  const howWeInvestQuery = `*[_type == "howWeInvest"
      && language._ref == "${languageId}"
      && preview.isPreview == ${preview}] | order(_createdAt asc)[0] {
      pageTitle, text, cards, cardsBackground, firstCard,
      }`;

  const query = {
    languages: languageQuery,
    team: teamQuery,
    community: communityQuery,
    hero: heroQuery,
    howWeInvest: howWeInvestQuery,
  };

  if (doc) {
    try {
      const response = await sanityClient.fetch(
        Object.prototype.hasOwnProperty.call(query, doc) ? query[doc] : genericQuery,
      );
      return response;
    } catch (err) {
      return console.error(err);
    }
  }
};
export default fetchContent;