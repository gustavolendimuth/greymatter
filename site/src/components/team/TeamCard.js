/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import urlFor from '../../services/urlFor';

export default function TeamCard({ member: { alt, name, photoLg, position, linkedin, slug } }) {
  return (
    <>
      <ReactTooltip />
      <div className="col">
        <div
          className="d-flex d-xxl-flex flex-column align-items-center"
        >
          <Link
            className="text-decoration-none"
            to={ `/team-members/${slug.current}` }
          >
            <img
              data-tip="Profile"
              data-class="team-tooltip"
              alt={ alt }
              src={ photoLg && urlFor(photoLg.asset).url() }
              className="team-photo"
            />
            <p data-tip="Profile" data-class="team-tooltip" className="fs-5 fw-bold text-center pt-2 team-text">{name}</p>
          </Link>
          <a data-class="team-tooltip" data-place="bottom" data-tip="Linkedin" className="text-decoration-none" href={ linkedin }>
            <div
              className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-32 0 512 512"
                width="1em"
                height="1em"
                fill="currentColor"
                className="team-text"
              >
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
              <span className="fs-6 text-light team-text">{position}</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
TeamCard.propTypes = {
  member: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      photoLg: PropTypes.string,
      position: PropTypes.string,
      slug: PropTypes.string,
    }),
  ),
}.isRequired;
