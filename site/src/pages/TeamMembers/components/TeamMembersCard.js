/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable max-len */
import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import { FaLinkedin } from 'react-icons/fa';
import urlFor from '../../../utils/urlFor';
import Context from '../../../context/Context';
import ArrowDown from '../../components/ArrowDown';

export default function TeamMembersCard({
  member: { alt, name, photoLg, position, linkedin, text, slug },
  showArrowDown,
  index,
}) {
  const { teamMembers } = useContext(Context);
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
        <ArrowDown to={ `/team-members/${teamMembers[index + 1].slug.current}` } />
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
