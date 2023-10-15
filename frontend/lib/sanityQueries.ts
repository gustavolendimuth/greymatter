/* eslint-disable import/prefer-default-export */
import { groq } from 'next-sanity';

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

export const applicationQuery = groq`
  *[_type == "application"][0] {
    title,
    text,
    image,

  }
`;

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const blogSettingsQuery = groq`*[_type == "blogSettings"][0]`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

export const indexQuery = groq`
*[_type == "posts"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "posts" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "posts" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "posts" && defined(slug.current)][].slug.current
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
