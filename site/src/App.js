/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/css/aos.css';
import './assets/css/SegoeUI.css';
import './css/application.css';
import './css/community.css';
import './assets/css/Footer-Dark-Multi-Column-icons.css';
import './css/hero.css';
import './css/styles.css';
import './css/what-we-offer.css';
import './css/what-we-look-for.css';
import './css/who-we-are.css';

import Navbar from './components/Navbar';
import Greymatter from './pages/Greymatter';
import TeamMembers from './pages/TeamMembers';
import Footer from './components/Footer';
import ApplicationForm from './pages/ApplicationForm';
import HomeContext from './context/HomeContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const {
    getTeamMembers,
    languages,
    getLanguages,
    setDefaultLanguage,
    languageId,
    setLanguageId,
    getLocalStorage,
    setLocalStorage,
  } = useContext(HomeContext);

  useEffect(() => {
    const value = getLocalStorage('languageId');
    if (value) {
      setLanguageId(value);
    } else {
      getLanguages();
    }
  }, []);

  useEffect(() => {
    setDefaultLanguage();
  }, [languages]);

  useEffect(() => {
    getTeamMembers();
    if (languageId) setLocalStorage('languageId', languageId);
  }, [languageId]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route element={ <Greymatter /> } path="/" exact />
          <Route element={ <ApplicationForm /> } path="/application" />
          <Route element={ <TeamMembers /> } path="/team-members/:slug" />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
