/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

import './pages/assets/styles/SegoeUI.css';
import './pages/assets/styles/Footer-Dark-Multi-Column-icons.css';
import './pages/assets/styles/App.css';
import './pages/assets/styles/Footer.css';
import 'react-tooltip/dist/react-tooltip.css';

import Home from './pages/Home/Home';
import TeamMembers from './pages/TeamMembers/TeamMembers';
import Footer from './pages/components/Footer';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm';
import HomeContext from './context/Context';
import Navbar from './pages/components/Navbar';
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
    console.log(process.env.REACT_APP_PROJECT_DATASET);
  }, []);

  useEffect(() => {
    if (!languageId) {
      setDefaultLanguage();
    }
  }, [languages]);

  useEffect(() => {
    if (languageId) {
      setLocalStorage('languageId', languageId);
    }
  }, [languageId]);

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Home />} path="/:slug" />
          <Route element={<ApplicationForm />} path="/application-form" />
          <Route element={<TeamMembers />} path="/team-members/:slug" />
        </Routes>
      </main>
      <Footer />
      <HomeModal />
    </BrowserRouter>
  );
}

export default App;
