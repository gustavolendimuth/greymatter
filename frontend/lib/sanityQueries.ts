/* eslint-disable import/prefer-default-export */
import { groq } from 'next-sanity';
import { BlogCategory } from 'types/componentsTypes';

export const heroQuery = groq`
  *[_type == "hero"][0] {
    "video": video[_key == $locale][0].value {
      "portrait": portrait.asset->url,
      "landscape": landscape.asset->url
    }
  }
`;

export const introQuery = groq`
  *[_type == "intro"][0] {
    background,
    logo,
    "subtitle": subtitle[_key == $locale][0].value,
    "text": text[_key == $locale][0].value
  }
`;

export const whoWeAreQuery = groq`
  *[_type == "whoWeAre"][0] {
    "text": text[_key == $locale][0].value,
    "title": title[_key == $locale][0].value,
    image,
  }
`;

export const whatWeLookForQuery = groq`
  *[_type == "whatWeLookFor"][0] {
    "title": title[_key == $locale][0].value,
    background,
    cards[] {
      title,
      "text": text[_key == $locale][0].value,
      image {
        asset,
        alt
      }
    }
  }
`;

export const whatDoWeOfferQuery = groq`
  *[_type == "whatDoWeOffer"][0] {
    "title": title[_key == $locale][0].value,
    background,
    cards[] {
      title,
      "text": text[_key == $locale][0].value,
      image {
        asset,
        alt
      }
    }
  }
`;

export const howWeInvestQuery = groq`
  *[_type == "howWeInvest"][0] {
    "title": title[_key == $locale][0].value,
    background,
    firstCard,
    cards[] {
      title,
      "text": text[_key == $locale][0].value,
      image {
        asset,
        alt
      }
    }
  }
`;

export const teamQuery = groq`
  *[_type == "team"][0] {
    "title": title[_key == $locale][0].value,
    background,
    "team": { 
      "members": team.members[]-> {
        _id,
        name, 
        image, 
        position,
        linkedin,
        "bio": bio[_key == $locale][0].value,
        slug
      },
      "sort": team.sort
    }
  }
`;

export const communityQuery = groq`
  *[_type == "community"][0] {
    "title": title[_key == $locale][0].value,
    "text": text[_key == $locale][0].value,
    background,
    "community": {
      "members": community.members[]->{
        name,
        image,
        "position": position[_key == $locale][0].value,
        linkedin,
        slug
      },
      "sort": community.sort
    }
  }
`;

export const portfolioQuery = groq`
  *[_type == "portfolio"][0] {
    "title": title[_key == $locale].value,
    "companies": companies[]{
      name,
      exit,
      categories,
      logo,
      "description": description[_key == $locale][0].value,
      "text": text[_key == $locale][0].value,
    }
  }
`;

export const applicationQuery = groq`
  *[_type == "application"][0] {
    "title": title[_key == $locale][0].value,
    "text": text[_key == $locale][0].value,
    image,
    "buttonText": buttonText[_key == $locale][0].value
  }
`;

export const BlogSettingsQuery = (category: BlogCategory) =>
  groq`*[_type == "blogSettings"][0].${category} {
    "title": title[_key == $locale][0].value,
    "description": description[_key == $locale][0].value
  }`;

export const newsSettingsQuery = groq`
  *[_type == "blogSettings"][0] {
    "title": news.title[_key == $locale][0].value,
    "description": news.description[_key == $locale][0].value
  }
`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

const postFields = groq`
  _id,
  "title": title[_key == $locale][0].value,
  date,
  _updatedAt,
  "excerpt": excerpt[_key == $locale][0].value,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const allPostsQuery = groq`
*[_type == "posts" && category == $category] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "posts" && slug.current == $slug] | order(_updatedAt desc) [0] {
    "content": content[_key == $locale][0].value,
    ${postFields}
  },
  "morePosts": *[_type == "posts" && slug.current != $slug && category == $category] | order(date desc, _updatedAt desc) [0...4] {
    "content": content[_key == $locale][0].value, 
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "posts" && defined(slug.current) && category == $category][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "posts" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const footerQuery = groq`
  *[_type == "footer"][0] {
    logo,
    "formText": formText[_key == $locale][0].value
  }
`;
