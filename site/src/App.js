/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/SegoeUI.css';
import './assets/css/Footer-Dark-Multi-Column-icons.css';
import './css/App.css';
import './css/Navbar.css';
import './css/Footer.css';

import Home from './pages/Home/Home';
import TeamMembers from './pages/TeamMembers/TeamMembers';
import Footer from './components/Footer';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm';
import HomeContext from './context/Context';
import Navbar from './components/Navbar';
import HomeModal from './pages/Home/components/HomeModal';

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
          <Route element={ <Home /> } path="/" exact />
          <Route element={ <Home /> } path="/:slug" />
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
