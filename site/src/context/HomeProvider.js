/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import HomeContext from './HomeContext';

export default function HomeProvider({ children }) {
  const [language, setLanguage] = useState();
  const [languageId, setLanguageId] = useState();

  const contextValue = {
    language,
    setLanguage,
    languageId,
    setLanguageId,
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
