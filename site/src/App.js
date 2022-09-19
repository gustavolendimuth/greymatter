/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
// import './assets/css/aos.css';
import './assets/css/SegoeUI.css';
import './assets/css/Footer-Dark-Multi-Column-icons.css';
import './css/application.css';
import './css/community.css';
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

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      // initClassName: 'aos-init', // class applied after initialization
      // animatedClassName: 'aos-animate', // class applied on animation
      // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      // offset: 120, // offset (in px) from the original trigger point
      // delay: 0, // values from 0 to 3000, with step 50ms
      // duration: 400, // values from 0 to 3000, with step 50ms
      // easing: 'ease', // default easing for AOS animations
      // once: false, // whether animation should happen only once - while scrolling down
      // mirror: false, // whether elements should animate out while scrolling past them
      // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
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
    </BrowserRouter>
  );
}

export default App;
