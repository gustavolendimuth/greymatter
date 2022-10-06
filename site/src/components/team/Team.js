/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import TeamCard from './TeamCard';
import HomeContext from '../../context/HomeContext';
import ArrowDown from '../ArrowDown';

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
        >
          {
            teamMembers
              && teamMembers.map((member, index) => <TeamCard key={ index } member={ member } />)
          }
        </div>
        <ArrowDown to="/community" />
      </div>
    </section>
  );
}

Team.propTypes = {
  team: PropTypes.any.isRequired,
};
