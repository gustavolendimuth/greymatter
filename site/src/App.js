/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/SegoeUI.css';
import './assets/css/Footer-Dark-Multi-Column-icons.css';
import './css/application.css';
import './css/community.css';
import './css/hero.css';
import './css/main.css';
import './css/team.css';
import './css/what-do-we-offer.css';
import './css/what-we-look-for.css';
import './css/who-we-are.css';
import './css/navbar.css';
import './css/footer.css';

import Greymatter from './pages/Greymatter';
import TeamMembers from './pages/TeamMembers';
import Footer from './components/Footer';
import ApplicationForm from './pages/ApplicationForm';
import HomeContext from './context/HomeContext';
import Navbar from './components/Navbar';
import HomeModal from './components/HomeModal';

function App() {
  const {
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
    getLanguages();
    if (value) {
      setLanguageId(value);
    }
  }, []);

  useEffect(() => {
    if (!languageId) {
      setDefaultLanguage();
    }
  }, [languages]);

  useEffect(() => {
    if (languageId) {
      setLocalStorage('languageId', languageId);

      const openModal = () => $('#exampleModal').modal('show');
      openModal();
    }
  }, [languageId]);

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route element={ <Greymatter /> } path="/" exact />
          <Route element={ <Greymatter /> } path="/:slug" />
          <Route element={ <ApplicationForm /> } path="/application-form" />
          <Route element={ <TeamMembers /> } path="/team-members/:slug" />
        </Routes>
      </main>
      <Footer />
      <HomeModal />
    </BrowserRouter>
  );
}

export default App;
