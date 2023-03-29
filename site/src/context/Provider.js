/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Context from './Context';
import fetchContent from '../utils/fetchContent';

export default function HomeProvider({ children }) {
  const [languages, setLanguages] = useState();
  const [languageId, setLanguageId] = useState();
  const [navbarConfig, setNavbarConfig] = useState();
  const [teamMembers, setTeamMembers] = useState();
  const [teamPageTitle, setTeamPageTitle] = useState();

  const section = {
    whoWeAre: useRef(),
    whatWeLookFor: useRef(),
    whatDoWeOffer: useRef(),
    howWeInvest: useRef(),
    team: useRef(),
    community: useRef(),
    application: useRef(),
  };

  const getLanguages = async () => {
    if (!languages) {
      const data = await fetchContent('languages');
      setLanguages(data);
    }
  };

  const getTeamMembersContent = async () => {
    const data = await fetchContent('team', languageId);
    if (data) {
      setTeamPageTitle(data.title);
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
    section,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

HomeProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
