import React, { useContext, useEffect } from 'react';
import background from './img/greymatter-hero-image.webp';
import WhatWeLookFor from './components/WhatWeLookFor';
import Hero from './components/Hero';
import WhoWeAreSection from './components/WhoWeAre';
import WhaDoWeOffer from './components/WhaDoWeOffer';
import Team from './components/Team';
import Community from './components/Community';
import HomeContext from './context/HomeContext';

export default function Greymatter() {
  const { language, setLanguage } = useContext(HomeContext);

  useEffect(() => {
    // const script = document.createElement('script');
    // script.src = './assets/js/style.js';
    // script.async = true;
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };

  }, []);

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <>
      <div
        className="greymatter-hero-image"
        data-bss-scroll-zoom="true"
        data-bss-scroll-zoom-speed="3"
        style={ { background: `url(${background}) top / cover` } }
      >
        <header
          className="d-flex flex-column justify-content-between align-items-xxl-center gap-5 section"
        >
          <div className="spacer spacer-hero" />
          <Hero />
        </header>
        <WhoWeAreSection />
      </div>
      <WhatWeLookFor />
      <WhaDoWeOffer />
      <Team />
      <Community />
    </>
  );
}
