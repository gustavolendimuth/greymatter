/* eslint-disable react-hooks/exhaustive-deps */
import { toHTML } from '@portabletext/to-html';
import PropTypes from 'prop-types';
import React from 'react';
import parse from 'html-react-parser';
import urlFor from '../../services/urlFor';

export default function WhatWeLookForCards({ card: { image, text } }) {
  return (
    <div className="col flex-column section-container">
      <div
        className="d-flex flex-column justify-content-evenly align-items-center gap-2 gap-lg-4 py-3 px-5 p-lg-4 what-we-look-for-card"
      >
        <div className="d-flex justify-content-center align-items-center who-we-are-div-icon">
          <img
            className="img-fluid what-we-look-for-icon"
            src={ urlFor(image.imageLg.asset).url() }
            loading="auto"
            alt={ image?.alt }
          />
        </div>
        <div className="text-center text-light card-text">
          {
            text && parse(toHTML(text))
          }
        </div>
      </div>
    </div>
  );
}

WhatWeLookForCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
}.isRequired;
