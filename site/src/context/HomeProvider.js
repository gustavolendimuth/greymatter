/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import HomeContext from './HomeContext';
import sanityClient from '../services/sanityClient';

export default function HomeProvider({ children }) {
  const [language, setLanguage] = useState();
  const [languageId, setLanguageId] = useState();
  const [navbarConfig, setNavbarConfig] = useState();
  const [teamMembers, setTeamMembers] = useState();
  const [teamPageTitle, setTeamPageTitle] = useState();

  const getLanguages = () => {
    if (!language) {
      sanityClient.fetch(
        `*[_type == "language"] {
        abbreviation,
        code,
        language,
        _id
      }`,
      ).then((data) => setLanguage(data))
        .catch((e) => console.error(e));
    }
  };

  const getLanguageId = () => {
    if (language && !languageId) {
      if (language.some((value) => value.code === 'en')) {
        setLanguageId(
          language.find((value) => value.code === 'en')._id,
        );
      } else if (language.some((value) => value.code === 'pt-br')) {
        setLanguageId(
          language.find((value) => value.code === 'pt-br')._id,
        );
      } else {
        setLanguageId(language[0]._id);
      }
    }
  };

  const getTeamMembers = () => {
    if (!teamMembers && languageId) {
      sanityClient.fetch(
        `*[_type == "team" 
          && language._ref == "${languageId}" 
          && preview.isPreview == false] | order(_createdAt asc)[0] {
        'members':teamMembers.teamMembers[]->{name, alt, photoLg, position, linkedin, text, slug},
        pageTitle,
      }`,
      ).then((data) => {
        if (data) {
          setTeamPageTitle(data.pageTitle);
          setTeamMembers(data.members);
        }
      })
        .catch((e) => console.error(e));
    }
  };

  const contextValue = {
    language,
    setLanguage,
    languageId,
    setLanguageId,
    navbarConfig,
    setNavbarConfig,
    teamMembers,
    setTeamMembers,
    getTeamMembers,
    teamPageTitle,
    setTeamPageTitle,
    getLanguages,
    getLanguageId,
  };

  return (
    <HomeContext.Provider value={ contextValue }>
      { children }
    </HomeContext.Provider>
  );
}

HomeProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
