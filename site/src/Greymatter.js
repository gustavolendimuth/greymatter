import React from 'react';
import background from './img/greymatter-hero-image.webp';
import WhatWeLookFor from './components/WhatWeLookFor';
import HeroContent from './components/HeroContent';
import HeroSubtitle from './components/HeroSubtitle';
import WhoWeAreSection from './components/WhoWeAre';
import WhaDoWeOffer from './components/WhaDoWeOffer';
import Team from './components/Team';
import Community from './components/Community';

export default function Greymatter() {
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
          <HeroContent />
          <HeroSubtitle />
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
