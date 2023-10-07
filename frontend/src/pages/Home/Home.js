/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import camelcase from 'camelcase';
import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
// Sections
import Hero from './sections/00-Hero/Hero';
import WhoWeAre from './sections/02-WhoWeAre/WhoWeAre';
import WhatWeLookFor from './sections/03-WhatWeLookFor/WhatWeLookFor';
import WhatDoWeOffer from './sections/04-WhatDoWeOffer/WhatDoWeOffer';
import HowWeInvest from './sections/05-HowWeInvest/HowWeInvest';
import Team from './sections/06-Team/Team';
import Community from './sections/07-Community/Community';
import Application from './sections/08-Application/Application';
// Utils
import Context from '../../context/Context';
import Intro from './sections/01-Intro/Intro';

export default function Greymatter() {
  const {
    setNavbarConfig,
    section,
  } = useContext(Context);

  const { slug } = useParams();

  const scrollToCard = () => {
    window.scrollTo({
      top: section[camelcase(slug)].current?.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setNavbarConfig({ background: false, position: 'relative' });
  }, []);

  useLayoutEffect(() => {
    if (slug) {
      scrollToCard();
    } else {
      window.scrollTo(0, 0);
    }
  });

  return (
    <>
      <Hero />
      <Intro />
      <WhoWeAre />
      <WhatWeLookFor />
      <WhatDoWeOffer />
      <HowWeInvest />
      <Team />
      <Community />
      <Application />
    </>
  );
}
