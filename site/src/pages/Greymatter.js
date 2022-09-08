/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import background from '../img/greymatter-hero-image.webp';
import WhatWeLookFor from '../components/WhatWeLookFor';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import WhaDoWeOffer from '../components/WhaDoWeOffer';
import Team from '../components/Team';
// import Community from '../components/Community';
import HomeContext from '../context/HomeContext';
import Application from '../components/Application';

export default function Greymatter() {
  const {
    setNavbarConfig,
  } = useContext(HomeContext);

  const { slug } = useParams();
  const whoWeAre = useRef(null);
  const whatWeLookFor = useRef(null);
  const whatDoWeOffer = useRef(null);
  const team = useRef(null);
  // const community = useRef(null);
  const application = useRef(null);

  useEffect(() => {
    setNavbarConfig({ background: false, position: 'absolute' });
  }, []);

  useLayoutEffect(() => {
    if (slug) {
      let section;
      switch (slug) {
      case 'who-we-are':
        section = whoWeAre;
        break;
      case 'what-we-look-for':
        section = whatWeLookFor;
        break;
      case 'what-do-we-offer':
        section = whatDoWeOffer;
        break;
      case 'team':
        section = team;
        break;
      case 'application':
        section = application;
        break;
      default:
        break;
      }
      // const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
      const scrollToCard = () => {
        window.scrollTo({
          top: section.current.offsetTop,
          behavior: 'smooth',
        });
      };
      scrollToCard();
    }
  });

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
        <WhoWeAre whoWeAre={ whoWeAre } />
      </div>
      <WhatWeLookFor whatWeLookFor={ whatWeLookFor } />
      <WhaDoWeOffer whatDoWeOffer={ whatDoWeOffer } />
      <Team team={ team } />
      {/* <Community community={ community } /> */}
      <Application application={ application } />
    </>
  );
}
