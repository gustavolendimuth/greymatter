import sanityClient from './sanityClient';

const fetchContent = async (page, languageId) => {
  let query;
  if (page === 'language') {
    query = `*[_type == "language"] {
      abbreviation, code, language, _id }`;
  } else if (page === 'team') {
    query = `*[_type == "team" 
      && language._ref == "${languageId}" 
      && preview.isPreview == false] | order(_createdAt asc)[0] {
      pageTitle,
      'members':teamMembers.teamMembers[]->{name, alt, photoLg, position, linkedin, text, slug },
      }`;
  } else if (page === 'community') {
    query = `*[_type == "community" 
      && language._ref == "${languageId}" 
      && preview.isPreview == false] | order(_createdAt asc)[0] {
      pageTitle, text, image,
      'members':communityMembers.communityMembers[]->{name, alt, photoLg, position, linkedin, text, slug }
      }`;
  } else {
    query = `*[_type == "${page}" 
      && language._ref == "${languageId}" 
      && preview.isPreview == false] | order(_createdAt asc)[0]`;
  }
  if (page) {
    try {
      const response = await sanityClient.fetch(query);
      return response;
    } catch (e) {
      return console.error(e);
    }
  }
};
export default fetchContent;
