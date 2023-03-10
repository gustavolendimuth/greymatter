/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components
import TeamCard from './components/TeamCard';
import ArrowDown from '../../../../components/ArrowDown';
// Context
import Context from '../../../../context/Context';
// Styles
import './Team.css';

export default function Team({ team }) {
  const { languageId, teamMembers, teamPageTitle, getTeamMembersContent } = useContext(Context);

  useEffect(() => {
    getTeamMembersContent();
  }, [languageId]);

  if (!team || !teamMembers || teamPageTitle) return null;

  return (
    <section ref={ team } id="team" className="team-section">
      <div className="container section" id="team-container">
        <div className="visible spacer" />
        <h1 className="display-3 text-uppercase text-center section-title">{teamPageTitle}</h1>
        <div
          className="row gx-0 gy-5 row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center align-items-center pb-5"
        >
          {
            teamMembers.map((member, index) => <TeamCard key={ index } member={ member } index={ index } />)
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
