// import { toHTML } from '@portabletext/to-html';
import PropTypes from 'prop-types';
import React from 'react';
// import parse from 'html-react-parser';
import urlFor from '../services/urlFor';

const duration = '1200';
const delayTime = 300;
let delay;

export default function WhatDoWeOfferCard({ card: { image, title } }) {
  if (delay) {
    delay = (Number(delay) + delayTime).toString();
  } else {
    delay = '200';
  }

  return (
    <div className="col">
      <div
        className="d-flex flex-column justify-content-around align-items-center py-3 px-2 gap-2 what-do-we-offer-card"
        data-bss-disabled-mobile="true"
        data-aos="flip-left"
        data-aos-duration={ duration }
        data-aos-delay={ delay }
        data-aos-once="true"
      >
        <img
          alt={ image.alt }
          className="wha-do-we-offer-card-icon"
          src={ image && urlFor(image.imageLg.asset).url() }
        />
        <p className="what-do-we-offer-card-text">{ title }</p>
      </div>
    </div>
  );
}

WhatDoWeOfferCard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
}.isRequired;
