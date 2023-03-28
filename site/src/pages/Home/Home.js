/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import camelcase from 'camelcase';
// Sections
import Hero from './sections/01-Hero/Hero';
import WhoWeAre from './sections/02-WhoWeAre/WhoWeAre';
import WhatWeLookFor from './sections/03-WhatWeLookFor/WhatWeLookFor';
import WhatDoWeOffer from './sections/04-WhatDoWeOffer/WhatDoWeOffer';
import HowWeInvest from './sections/05-HowWeInvest/HowWeInvest';
import Team from './sections/06-Team/Team';
import Community from './sections/07-Community/Community';
import Application from './sections/08-Application/Application';
// Utils
import Context from '../../context/Context';
import fetchContent from '../../utils/fetchContent';
import urlFor from '../../utils/urlFor';

export default function Greymatter() {
  const {
    setNavbarConfig,
    languageId,
    section,
  } = useContext(Context);

  const [heroContent, setHeroContent] = useState();
  const [heroBackground, setHeroBackground] = useState();
  const [heroBackgroundVideo, setHeroBackgroundVideo] = useState();

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

  useEffect(() => {
    const getHeroContent = async () => {
      const data = await fetchContent('hero', languageId);
      if (data) {
        setHeroContent(data);
        setHeroBackground(data.background);
        setHeroBackgroundVideo(data.backgroundVideo);
      }
    };
    getHeroContent();
  }, [languageId]);

  useLayoutEffect(() => {
    if (slug) {
      scrollToCard();
    } else {
      window.scrollTo(0, 0);
    }
  });

  return (
    <>
      <header>
        <video
          className="hero-background-video"
          src={ heroBackgroundVideo && heroBackgroundVideo }
          autoPlay
          loop
          muted
        />
        <img
          src={ (!heroBackgroundVideo && heroBackground?.image) && urlFor(heroBackground.image).url() }
          className={
            `hero-background-image 
          ${heroBackground?.heightLimit && 'hero-background-height-limit'} 
          ${heroBackground?.alignToTop && 'hero-background-position-top'}`
          }
          alt={ heroBackground?.alt }
        />
        {
          heroContent && <Hero heroContent={ heroContent } />
        }
      </header>
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
