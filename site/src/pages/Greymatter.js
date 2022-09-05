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
import sanityClient from '../services/sanityClient';
import HomeContext from '../context/HomeContext';
import Application from '../components/Application';

export default function Greymatter() {
  const { language, setLanguage, setLanguageId } = useContext(HomeContext);

  useEffect(() => {
    if (!language) {
      sanityClient.fetch(
        `*[_type == "language"] {
        abbreviation,
        code,
        language,
        _id
      }`,
      ).then((data) => setLanguage(data))
        .catch((e) => console.error(e));
    }
  }, []);

  useEffect(() => {
    if (language) {
      if (language.some((value) => value.code === 'en')) {
        setLanguageId(
          language.find((value) => value.code === 'en')._id,
        );
      } else {
        setLanguageId(
          language.find((value) => value.code === 'pt-br')._id,
        );
      }
    }
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
      {/* <Community /> */}
      <Application />
    </>
  );
}
