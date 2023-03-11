/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// Utils
import urlFor from '../../../../../utils/urlFor';
// Styles
import './CommunityCard.css';

export default function CommunityCard({ member: { alt, name, photoLg, position, linkedin } }) {
  return (
    <div
      data-tooltip-content={ position }
      data-tooltip-place="top"
      data-tooltip-float="true"
      // data-tooltip-offset="-230"
      className="col-auto d-flex flex-column justify-content-center align-items-center community-card-tooltip"
    >
      <div
        className="d-flex justify-content-center flex-column align-items-center community-card"
      >
        <img
          alt={ alt }
          className="community-photo"
          loading="lazy"
          src={ photoLg && urlFor(photoLg.asset)
            .size(200)
            .quality(90)
            .format('webp')
            .url() }
        />
        <a href={ linkedin }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-32 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            className="community-card-text community-card-icon"
          >
            <path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            />
          </svg>
        </a>
        <p className="fs-5 text-center pt-2 community-card-text community-card-name">{name}</p>
        <div
          className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1 community-position-container"
        >
          <p className="community-card-position community-card-position">{position}</p>
        </div>
      </div>
    </div>
  );
}

CommunityCard.propTypes = {
  member: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      photoLg: PropTypes.string,
      position: PropTypes.string,
    }),
  ),
}.isRequired;
