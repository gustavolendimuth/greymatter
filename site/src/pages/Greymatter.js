/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import WhatWeLookFor from '../components/whatWeLookFor/WhatWeLookFor';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import WhatDoWeOffer from '../components/whatDoWeOffer/WhatDoWeOffer';
import Team from '../components/team/Team';
import Community from '../components/community/Community';
import HomeContext from '../context/HomeContext';
import Application from '../components/Application';
import fetchContent from '../services/fetchContent';
import urlFor from '../services/urlFor';

export default function Greymatter() {
  const {
    setNavbarConfig,
    languageId,
  } = useContext(HomeContext);

  const [heroContent, setHeroContent] = useState();
  const [heroBackground, setHeroBackground] = useState();
  const [heroBackgroundVideo, setHeroBackgroundVideo] = useState();

  const { slug } = useParams();
  const whoWeAre = useRef(null);
  const whatWeLookFor = useRef(null);
  const whatDoWeOffer = useRef(null);
  const team = useRef(null);
  const community = useRef(null);
  const application = useRef(null);

  useEffect(() => {
    setNavbarConfig({ background: false, position: 'relative' });
    window.scrollTo(0, 0);
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
      case 'community':
        section = community;
        break;
      case 'application':
        section = application;
        break;
      default:
        break;
      }

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
      {/* Adicionada uma div que inclui o Header, o Hero e a seção Who we are
      para compartilhar o mesmo background  */}
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
        <Hero heroContent={ heroContent } />
      </header>
      <WhoWeAre whoWeAre={ whoWeAre } />
      <WhatWeLookFor whatWeLookFor={ whatWeLookFor } />
      <WhatDoWeOffer whatDoWeOffer={ whatDoWeOffer } />
      <Team team={ team } />
      <Community community={ community } />
      <Application application={ application } />
    </>
  );
}
