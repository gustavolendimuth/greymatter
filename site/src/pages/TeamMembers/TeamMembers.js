/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import TeamMembersCard from './components/TeamMembersCard';
import Context from '../../context/Context';
import './TeamMembers.css';
import teamMembersBackground from '../assets/img/greymatter-team-members-background.webp';

export default function TeamMembers() {
  const {
    teamMembers,
    setNavbarConfig,
    getTeamMembersContent,
    languageId,
  } = useContext(Context);

  const { slug } = useParams();

  useEffect(() => {
    setNavbarConfig({ background: true, position: 'fixed' });
    window.scrollTo(0, 0);
    if (!teamMembers) {
      getTeamMembersContent();
    }
  }, []);

  useEffect(() => {
    getTeamMembersContent();
  }, [languageId]);

  useLayoutEffect(() => {
    let memberCard;
    if (teamMembers && slug) {
      memberCard = `card${teamMembers.findIndex((member) => member.slug.current === slug)}`;
      const scrollToCard = () => {
        window.scrollTo({
          top: window[memberCard].current.offsetTop,
          behavior: 'smooth',
        });
      };
      scrollToCard();
    }
  });

  return (
    <section
      className="section"
      style={ { background: `url(${teamMembersBackground}) top / contain no-repeat fixed` } }
    >
      {
        teamMembers
            && teamMembers
              .map((member, index) => (
                <TeamMembersCard
                  key={ index }
                  showArrowDown={ teamMembers.length - 1 !== index }
                  member={ member }
                  index={ index }
                />
              ))
      }
    </section>
  );
}
