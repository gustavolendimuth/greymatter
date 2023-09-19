/* eslint-disable react-func/max-lines-per-function */
import sanityClient from './sanityClient';

const fetchContent = async (doc, languageId) => {
  const languageQuery = `*[_type == "language"] {
        abbreviation, code, language, _id 
      }`;

  const teamQuery = `*[_type == "team" 
      && language._ref == "${languageId}"] | order(_createdAt asc)[0] {
        title,
        'members':teamMembers.teamMembers[]->{name, alt, photoLg, position, linkedin, text, slug },
      }`;

  const communityQuery = `*[_type == "community" 
      && language._ref == "${languageId}"] | order(_createdAt asc)[0] {
        title, text, image, communityMembers,
        'members':communityMembers.communityMembers[]->{name, alt, photoLg, position, linkedin, text, slug }
      }`;

  const heroQuery = `*[_type == "hero" 
      && language._ref == "${languageId}"] | order(_createdAt asc)[0] {
        background, image, subTitle, text, title,
        "backgroundVideo": { 
          "landscapeVideo": backgroundVideo.landscapeVideo.asset->url,
          "portraitVideo": backgroundVideo.portraitVideo.asset->url
        }
      }`;

  const genericQuery = `*[_type == "${doc}" 
      && language._ref == "${languageId}"] | order(_createdAt asc)[0]`;

  const query = {
    languages: languageQuery,
    team: teamQuery,
    community: communityQuery,
    hero: heroQuery,
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
