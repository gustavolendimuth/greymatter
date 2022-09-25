import sanityClient from './sanityClient';

const fetchContent = async (doc, languageId) => {
  const preview = false;
  let query;
  if (doc === 'languages') {
    query = `*[_type == "language"] {
      abbreviation, code, language, _id }`;
  } else if (doc === 'team') {
    query = `*[_type == "team" 
      && language._ref == "${languageId}" 
      && preview.isPreview == ${preview}] | order(_createdAt asc)[0] {
      pageTitle,
      'members':teamMembers.teamMembers[]->{name, alt, photoLg, position, linkedin, text, slug },
      }`;
  } else if (doc === 'community') {
    query = `*[_type == "community" 
      && language._ref == "${languageId}" 
      && preview.isPreview == ${preview}] | order(_createdAt asc)[0] {
      pageTitle, text, image,
      'members':communityMembers.communityMembers[]->{name, alt, photoLg, position, linkedin, text, slug }
      }`;
  } else {
    query = `*[_type == "${doc}" 
      && language._ref == "${languageId}" 
      && preview.isPreview == ${preview}] | order(_createdAt asc)[0]`;
  }

  if (doc) {
    try {
      const response = await sanityClient.fetch(query);
      return response;
    } catch (e) {
      return console.error(e);
    }
  }
};
export default fetchContent;
