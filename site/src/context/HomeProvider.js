/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import HomeContext from './HomeContext';
import fetchContent from '../services/fetchContent';

export default function HomeProvider({ children }) {
  const [languages, setLanguages] = useState();
  const [languageId, setLanguageId] = useState();
  const [navbarConfig, setNavbarConfig] = useState();
  const [teamMembers, setTeamMembers] = useState();
  const [teamPageTitle, setTeamPageTitle] = useState();

  const getLanguages = async () => {
    if (!languages) {
      const data = await fetchContent('languages');
      setLanguages(data);
    }
  };

  const getTeamMembersContent = async () => {
    const data = await fetchContent('team', languageId);
    if (data) {
      setTeamPageTitle(data.pageTitle);
      setTeamMembers(data.members);
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

  const contextValue = {
    languages,
    setLanguages,
    languageId,
    setLanguageId,
    navbarConfig,
    setNavbarConfig,
    teamMembers,
    setTeamMembers,
    getTeamMembersContent,
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
