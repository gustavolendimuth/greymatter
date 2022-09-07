/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import background from '../img/greymatter-hero-image.webp';
import WhatWeLookFor from '../components/WhatWeLookFor';
import Hero from '../components/Hero';
import WhoWeAreSection from '../components/WhoWeAre';
import WhaDoWeOffer from '../components/WhaDoWeOffer';
import Team from '../components/Team';
// import Community from '../components/Community';
import HomeContext from '../context/HomeContext';
import Application from '../components/Application';

export default function Greymatter() {
  const {
    setNavbarConfig,
  } = useContext(HomeContext);

  useEffect(() => {
    setNavbarConfig({ background: false, position: 'absolute' });
  }, []);

  return (
    <>
      <div
        className="greymatter-hero-image"
        data-bss-scroll-zoom="true"
        data-bss-scroll-zoom-speed="3"
        style={ { background: `url(${background}) top / cover` } }
      >
        <header
          className="d-flex flex-column justify-content-between align-items-xxl-center gap-2 gap-lg-5 section"
        >
          <div className="spacer spacer-hero" />
          <Hero />
        </header>
        <WhoWeAreSection />
      </div>
      <WhatWeLookFor />
      <WhaDoWeOffer />
      <Team />
      {/* <Community /> */}
      <Application />
    </>
  );
}
