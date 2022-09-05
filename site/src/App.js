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

import Navbar from './components/Navbar';
import Greymatter from './pages/Greymatter';
import TeamMembers from './pages/TeamMembers';
import Footer from './components/Footer';
import ApplicationForm from './pages/ApplicationForm';

function App() {
  return (
    <HomeProvider>
      <Navbar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route element={ <Greymatter /> } path="/" exact />
            <Route element={ <ApplicationForm /> } path="/application" />
            <Route element={ <TeamMembers /> } path="/team-members" />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </HomeProvider>
  );
}

export default App;
