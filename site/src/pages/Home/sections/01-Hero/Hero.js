/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useLayoutEffect, useContext } from 'react';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
// Components
import ArrowDown from '../../../components/ArrowDown';
// Utils
import urlFor from '../../../../utils/urlFor';
// Styles
import './Hero.css';
import Context from '../../../../context/Context';
import fetchContent from '../../../../utils/fetchContent';

export default function Hero() {
  const [heroText, setHeroText] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [heroSubtitle, setHeroSubtitle] = useState('');
  const [heroBackgroundColor, setHeroBackgroundColor] = useState('');
  const [heroBackground, setHeroBackground] = useState();
  const [heroBackgroundVideo, setHeroBackgroundVideo] = useState();
  const { languageId } = useContext(Context);
  const [isPortrait, setIsPortrait] = useState(window.matchMedia('(orientation: portrait)').matches);
  let windowWidth;

  useEffect(() => {
    const getHeroContent = async () => {
      const data = await fetchContent('hero', languageId);
      if (data) {
        setHeroBackground(data.background);
        setHeroBackgroundVideo(data.backgroundVideo);
        setHeroText(toHTML(data.text));
        setHeroImage(data.image);
        setHeroSubtitle(data.subTitle);
        setHeroBackgroundColor(data.background.color?.rgb);
      }
    };
    getHeroContent();
  }, [languageId]);

  const fixFontSize = () => {
    if (heroText) {
      $('.hero-text').textfill({
        innerTag: 'p',
      });
    }
    if (heroSubtitle) {
      $('.hero-subtitle-container').textfill({
        innerTag: 'p',
      });
    }
  };

  const onResize = () => {
    fixFontSize();
    windowWidth = window.innerWidth;
  };

  window.onresize = onResize;

  useEffect(() => {
    fixFontSize();
  }, [heroText, heroSubtitle]);

  useLayoutEffect(() => {
    fixFontSize();
  });

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
      <header className="d-flex justify-content-center align-items-end full-height">
        <video
          className="hero-background-video"
          src={ (
            isPortrait ? console.log(heroBackgroundVideo.portraitVideo) || heroBackgroundVideo.portraitVideo : console.log(heroBackgroundVideo.portraitVideo) || heroBackgroundVideo.landscapeVideo
          ) }
          autoPlay
          loop
          muted
        />
        <ArrowDown styles="hero-arrow-down" to="/who-we-are" />
      </header>
    );
  }

  return (
    <header style={ { minHeight: 'calc(var(--vh, 1vh) * 100 - 70px)' } }>
      <img
        src={ heroBackground?.image ? urlFor(heroBackground.image).url() : undefined }
        className={
          `hero-background-image 
                ${heroBackground?.heightLimit && 'hero-background-height-limit'} 
                ${heroBackground?.alignToTop && 'hero-background-position-top'}`
        }
        alt={ heroBackground?.alt }
      />
      <div
        className="container d-flex flex-column justify-content-between align-items-xxl-center gap-2 gap-lg-5 hero-section"
        style={ {
          backgroundColor: heroBackgroundColor && `rgba(${heroBackgroundColor.r}, ${heroBackgroundColor.g}, ${heroBackgroundColor.b}, ${heroBackgroundColor.a})`,
        } }
      >
        <div className="spacer spacer-hero" />
        <div className="my-5 container-sm d-flex justify-content-center">
          <div className="row gy-4 gx-lg-5 gy-lg-0 hero-row justify-content-center align-items-center">
            <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start p-0 hero-logo-container">
              <img
                className="img-fluid gray-matter-logo"
                src={
                  heroImage
                && urlFor(
                  windowWidth <= 992 ? (heroImage.imageSm.asset || heroImage.imageLg.asset) : heroImage.imageLg.asset,
                )
                  .size(550)
                  .quality(100)
                  .format('webp')
                  .url()
                }
                loading="lazy"
                alt={ heroImage?.alt }
              />
            </div>
            <div className="col-12 col-lg-7 p-0 text-center">
              <div id="hero-text" className="text-center text-lg-start text-light mb-0 hero-text">
                { heroText && parse(heroText) }
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hero-subtitle-container text-center text-light hero-subtitle-text">
            <p>{heroSubtitle && heroSubtitle}</p>
          </div>
          <div className="col-md-12 text-center">
            <ArrowDown styles="hero-arrow-down" to="/who-we-are" />
          </div>
        </div>
      </div>
    </header>
  );
}
