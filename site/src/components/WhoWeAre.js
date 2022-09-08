/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import sanityClient from '../services/sanityClient';
import urlFor from '../services/urlFor';
import HomeContext from '../context/HomeContext';

export default function WhoWeAre({ whoWeAre = 'whoWeAre' }) {
  const [whoWeArePageTitle, setWhoWeArePageTitle] = useState('');
  const [whoWeAreText, setWhoWeAreText] = useState('');
  const [whoWeAreImage, setWhoWeAreImage] = useState();
  const { languageId } = useContext(HomeContext);

  useEffect(() => {
    if (languageId) {
      sanityClient.fetch(
        `*[_type == "whoWeAre" 
          && language._ref == "${languageId}" 
          && preview.isPreview == false] | order(_createdAt asc)[0] {
        image,
        pageTitle,
        text,
      }`,
      ).then((data) => {
        if (data) {
          setWhoWeArePageTitle(data.pageTitle);
          setWhoWeAreImage(data.image);
          setWhoWeAreText(toHTML(data.text));
        }
      })
        .catch((e) => console.error(e));
    }
  }, [languageId]);

  return (
    <section ref={ whoWeAre } id="whoWeAre">
      <div className="container section who-we-are-section">
        <div />
        <h1
          className="display-3 text-uppercase text-center section-title who-we-are-title"
        >
          { whoWeArePageTitle && whoWeArePageTitle }
        </h1>
        <div className="row gx-4 gy-5">
          <div className="col-12 col-lg-7">
            <div className="text-center text-lg-start who-we-are-text">
              { whoWeAreText && parse(whoWeAreText)}
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center order-first order-lg-last">
            <img
              src={
                whoWeAreImage
                && urlFor(whoWeAreImage.imageLg.asset)
              }
              className="who-we-are-image"
              alt={ whoWeAreImage?.alt }
            />
          </div>
        </div>
        <a className="btn" role="button" href="#what-we-look-for">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-64 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            className="text-primary arrow-down"
            alt="Arrow down"
          >
            <path
              d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

WhoWeAre.propTypes = {
  whoWeAre: PropTypes.any.isRequired,
};
