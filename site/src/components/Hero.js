/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import urlFor from '../services/urlFor';

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

  useEffect(() => {
    fixFontSize();
  }, [heroText, heroSubtitle]);

  useLayoutEffect(() => {
    fixFontSize();
  });

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-xxl-center gap-2 gap-lg-5 section hero-navbar-padding"
      style={ {
        backgroundColor: heroBackgroundColor && `rgba(${heroBackgroundColor.r}, ${heroBackgroundColor.g}, ${heroBackgroundColor.b}, ${heroBackgroundColor.a})`,
      } }
    >
      <div className="spacer spacer-hero" />
      <div className="container-sm d-flex justify-content-center">
        <div className="row gy-4 gx-lg-5 gy-lg-0 mx-auto gray-matter-row align-items-start">
          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start p-0">
            <img
              width="316px"
              className="img-fluid d-lg-none gray-matter-logo"
              src={ heroImage && urlFor(heroImage.imageSm.asset || heroImage.imageLg.asset).url() }
              alt={ heroImage?.alt }
            />
            <img
              className="d-none d-lg-inline gray-matter-logo-lg"
              src={ heroImage && urlFor(heroImage.imageLg.asset || heroImage.imageSm.asset).url() }
              alt={ heroImage?.alt }
            />

          </div>
          <div className="col-12 col-lg-7 p-0">
            <div id="hero-text" className="text-center text-lg-start text-light mb-0 hero-text">
              { heroText && parse(heroText) }
            </div>
          </div>
        </div>
      </div>
      <div className="container hero-subtitle-row">
        <div className="row">
          <div className="col-md-12 hero-subtitle-container">
            <p className="text-center text-light hero-subtitle-text">
              {heroSubtitle && heroSubtitle}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Link className="btn" role="button" to="/who-we-are">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-64 0 512 512"
                width="1em"
                height="1em"
                fill="currentColor"
                className="text-light arrow-down hero-arrow-down"
                alt="Arrow down"
              >
                <path
                  d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                />
              </svg>
            </Link>

          </div>
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
