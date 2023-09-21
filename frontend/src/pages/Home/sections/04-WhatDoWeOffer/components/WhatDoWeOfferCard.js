import React from 'react';
import PropTypes from 'prop-types';
// Utils
import urlFor from '../../../../../utils/urlFor';

export default function WhatDoWeOfferCard({ card: { image, title } }) {
  if (!image || !title) return null;
  return (
    <div className="col">
      <div
        className="d-flex flex-column justify-content-around align-items-center py-3 px-2 gap-2 what-do-we-offer-card"
      >
        <img
          alt={image?.alt}
          className="what-do-we-offer-card-icon"
          src={
            image && urlFor(image.imageLg.asset)
              .size(200)
              .quality(100)
              .url()
          }
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
