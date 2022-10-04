import PropTypes from 'prop-types';
import React from 'react';
import urlFor from '../../services/urlFor';

export default function WhatDoWeOfferCard({ card: { image, title } }) {
  return (
    <div className="col">
      <div
        className="d-flex flex-column justify-content-around align-items-center py-3 px-2 gap-2 what-do-we-offer-card"
      >
        <img
          alt={ image.alt }
          className="what-do-we-offer-card-icon"
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
