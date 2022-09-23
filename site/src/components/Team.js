/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeContext from '../context/HomeContext';
import TeamCard from './TeamCard';

export default function Team({ team }) {
  const { languageId, teamMembers, teamPageTitle, getTeamMembersContent } = useContext(HomeContext);

  useEffect(() => {
    getTeamMembersContent();
  }, [languageId]);

  return (
    <section ref={ team } id="team" className="team-section">
      <div className="container section" id="team-container">
        <div className="visible spacer" />
        <h1 className="display-3 text-uppercase text-center section-title">{teamPageTitle}</h1>
        <div
          className="row gx-0 gy-5 row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center align-items-center pb-5"
          data-bss-disabled-mobile="true"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-once="true"
        >
          {
            teamMembers
              && teamMembers.map((member, index) => <TeamCard key={ index } member={ member } />)
          }
        </div>
        <Link className="btn" role="button" to="/community">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-64 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            className="text-primary arrow-down"
          >
            <path
              d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

Team.propTypes = {
  team: PropTypes.any.isRequired,
};
