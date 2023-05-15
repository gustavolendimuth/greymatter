import React, { useEffect, useState, useContext } from 'react';
// Components
import ArrowDown from '../../../components/ArrowDown';
// Styles
import './Hero.css';
import Context from '../../../../context/Context';
import fetchContent from '../../../../utils/fetchContent';

export default function Hero() {
  const [heroBackgroundVideo, setHeroBackgroundVideo] = useState();
  const { languageId } = useContext(Context);
  const [isPortrait, setIsPortrait] = useState(window.matchMedia('(orientation: portrait)').matches);

  useEffect(() => {
    const getHeroContent = async () => {
      const data = await fetchContent('hero', languageId);
      if (data) {
        setHeroBackgroundVideo(data.backgroundVideo);
      }
    };
    getHeroContent();
  }, [languageId]);

  useEffect(() => {
    const handleOrientationChange = (e) => {
      setIsPortrait(e.matches);
    };

    const mql = window.matchMedia('(orientation: portrait)');
    mql.addEventListener('change', handleOrientationChange);

    return () => {
      mql.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  if ((heroBackgroundVideo?.landscapeVideo && !isPortrait) || (heroBackgroundVideo?.portraitVideo && isPortrait)) {
    return (
      <div className="hero-section full-height">
        <video
          className="hero-background-video full-height"
          src={ (
            isPortrait ? heroBackgroundVideo.portraitVideo : heroBackgroundVideo.landscapeVideo
          ) }
          autoPlay
          loop
          muted
        />
        <ArrowDown styles="hero-arrow-down" to="/intro" />
      </div>
    );
  }
}
