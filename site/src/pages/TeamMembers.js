/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TeamMembersCard from '../components/TeamMembersCard';
import HomeContext from '../context/HomeContext';
import '../css/team-members.css';
import teamMembersBackground from '../img/greymatter-team-members-background.webp';

export default function TeamMembers() {
  const {
    language,
    setNavbarConfig,
    languageId,
    getTeamMembers,
    teamMembers,
    getLanguages,
    getLanguageId,
  } = useContext(HomeContext);

  const { slug } = useParams();
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavbarConfig({ background: true, position: 'fixed' });
    getTeamMembers();
    getLanguages();
  }, []);

  useEffect(() => {
    getLanguageId();
  }, [language]);

  useEffect(() => {
    getTeamMembers();
  }, [languageId]);

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'auto',
    // });
    console.log(slug);
  }, [TeamMembers]);

  return (
    <section
      className="section pt-6"
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
                />
              ))
      }
    </section>
  );
}
