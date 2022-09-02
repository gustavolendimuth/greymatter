import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/SegoeUI.css';
import './css/application.css';
import './css/community.css';
import './assets/css/Footer-Dark-Multi-Column-icons.css';
import './css/hero.css';
import './assets/css/animate.min.css';
import './assets/css/aos.css';
import './css/styles.css';
import './css/what-we-offer.css';
import './css/what-we-look-for.css';
import './css/who-we-are.css';

import Application from './Application';
import Navbar from './components/Navbar';
import Greymatter from './Greymatter';
import TeamMembers from './TeamMembers';

function App() {
  useEffect(() => {
    // const script = document.createElement('script');
    // script.src = './assets/js/style.js';
    // script.async = true;
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route element={ <Greymatter /> } path="/" exact />
            <Route element={ <Application /> } path="/application" />
            <Route element={ <TeamMembers /> } path="/team-members" />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
