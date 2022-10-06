/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable max-len */
import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import urlFor from '../services/urlFor';
import HomeContext from '../context/HomeContext';

export default function TeamMembersCard({
  member: { alt, name, photoLg, position, linkedin, text, slug },
  showArrowDown,
  index,
}) {
  const { teamMembers } = useContext(HomeContext);
  window[`card${index}`] = useRef(null);

  return (
    <div
      id={ slug.current }
      ref={ window[`card${index}`] }
      className="container-sm d-flex flex-column justify-content-center align-items-center align-items-xxl-center team-members-container pb-5 section pt-6"
    >
      <div className="row gx-5 justify-content-center w-100">
        <div className="col-12 col-lg-4 text-lg-end d-flex flex-column align-items-center gap-lg-3 mx-0 px-0 gap-2 py-3">
          <img
            className="rounded-circle team-members-image"
            src={ photoLg && urlFor(photoLg.asset).url() }
            loading="auto"
            alt={ alt && alt }
            width="250px"
          />
          <div className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1 team-members-linkedin">
            <FaLinkedin className="team-members-position" />
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
        <Link className="btn btn-greymatter-team-members" role="button" to={ `/team-members/${teamMembers[index + 1].slug.current}` }>
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
        </Link>
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
