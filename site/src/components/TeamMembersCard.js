/* eslint-disable max-len */
/* eslint-disable sonarjs/no-identical-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import urlFor from '../services/urlFor';

export default function TeamMembersCard({
  member: { alt, name, photoLg, position, linkedin, text, slug },
  showArrowDown,
}) {
  return (
    <div
      id={ slug.current }
      className="container-sm d-flex flex-column justify-content-center align-items-center align-items-xxl-center team-members-container pb-5 section"
    >
      <div className="row gx-5 justify-content-center w-100">
        <div className="col-12 col-lg-4 text-lg-end d-flex flex-column align-items-center align-items-lg-end gap-lg-3 mx-0 px-0 gap-2 py-3">
          <img
            className="rounded-circle team-members-image"
            src={ photoLg && urlFor(photoLg.asset).url() }
            loading="auto"
            alt={ alt && alt }
            width="250px"
          />
          <div className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1 team-members-linkedin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-32 0 512 512"
              width="1em"
              height="1em"
              fill="currentColor"
              className="team-members-position"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            <a className="text-decoration-none team-members-position" href={ linkedin }>
              {position}
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column gap-lg-4 p-lg-4 ps-4 m-0">
          <h1 className="text-uppercase text-center text-lg-start text-dark team-members-title mt-lg-4 mb-3">
            {name && name}
          </h1>
          <div className="team-members-text text-dark">
            { text && parse(toHTML(text)) }
          </div>
        </div>
      </div>
      { showArrowDown && (
        <a className="btn btn-greymatter-team-members" role="button" href="#who-we-are">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-64 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            className="text-secondary arrow-down hero-arrow-down"
          >
            <path
              d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
            />
          </svg>
        </a>
      ) }
    </div>
  );
}

TeamMembersCard.propTypes = {
  index: PropTypes.number,
  member: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      photoLg: PropTypes.string,
      position: PropTypes.string,
    }),
  ),
}.isRequired;
