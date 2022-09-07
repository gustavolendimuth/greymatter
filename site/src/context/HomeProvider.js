/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import HomeContext from './HomeContext';
import sanityClient from '../services/sanityClient';

export default function HomeProvider({ children }) {
  const [languages, setLanguages] = useState();
  const [languageId, setLanguageId] = useState();
  const [navbarConfig, setNavbarConfig] = useState();
  const [teamMembers, setTeamMembers] = useState();
  const [teamPageTitle, setTeamPageTitle] = useState();

  const getLanguages = () => {
    if (!languages) {
      sanityClient.fetch(
        `*[_type == "language"] {
        abbreviation,
        code,
        language,
        _id
      }`,
      ).then((data) => setLanguages(data))
        .catch((e) => console.error(e));
    }
  };

  const setDefaultLanguage = () => {
    if (languages && !languageId) {
      if (languages.some((value) => value.code === 'en')) {
        setLanguageId(
          languages.find((value) => value.code === 'en')._id,
        );
      } else if (languages.some((value) => value.code === 'pt-br')) {
        setLanguageId(
          languages.find((value) => value.code === 'pt-br')._id,
        );
      } else {
        setLanguageId(languages[0]._id);
      }
    }
  };

  const setLocalStorage = (key, value) => {
    if (key && value) localStorage.setItem(key, JSON.stringify(value));
  };

  const getLocalStorage = (key) => key && JSON.parse(localStorage.getItem(key));

  const getTeamMembers = () => {
    if (languageId) {
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
    languages,
    setLanguages,
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
    setDefaultLanguage,
    setLocalStorage,
    getLocalStorage,
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
