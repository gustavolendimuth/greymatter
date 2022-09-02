import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeProvider from './context/HomeProvider';

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
import Footer from './components/Footer';

function App() {
  return (
    <HomeProvider>
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
      <Footer />
    </HomeProvider>
  );
}

export default App;
