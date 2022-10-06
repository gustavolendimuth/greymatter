/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import urlFor from '../services/urlFor';
import ArrowDown from './ArrowDown';

export default function Hero({ heroContent }) {
  const [heroText, setHeroText] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [heroSubtitle, setHeroSubtitle] = useState('');
  const [heroBackgroundColor, setHeroBackgroundColor] = useState('');

  useEffect(() => {
    if (heroContent) {
      setHeroText(toHTML(heroContent.text));
      setHeroImage(heroContent.image);
      setHeroSubtitle(heroContent.subTitle);
      setHeroBackgroundColor(heroContent.background.color?.rgb);
    }
  }, [heroContent]);

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

  window.onresize = fixFontSize;

  useEffect(() => {
    fixFontSize();
  }, [heroText, heroSubtitle]);

  useLayoutEffect(() => {
    fixFontSize();
  });

  return (
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
              className="img-fluid d-lg-none gray-matter-logo"
              src={ heroImage && urlFor(heroImage.imageSm.asset || heroImage.imageLg.asset).url() }
              alt={ heroImage?.alt }
            />
            <img
              className="d-none d-lg-inline gray-matter-logo-lg gray-matter-logo"
              src={ heroImage && urlFor(heroImage.imageLg.asset || heroImage.imageSm.asset).url() }
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
  );
}

Hero.propTypes = {
  heroContent: PropTypes.shape({
    background: PropTypes.shape({
      color: PropTypes.shape({
        rgb: PropTypes.any,
      }),
    }),
    image: PropTypes.any,
    subTitle: PropTypes.any,
    text: PropTypes.any,
  }).isRequired,
};
