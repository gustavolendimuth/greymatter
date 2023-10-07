/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React, { useContext, useEffect, useState } from 'react';
// Libraries
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import { Tooltip } from 'react-tooltip';
// Context
import Context from '../../../../context/Context';
// Components
import ArrowDown from '../../../components/ArrowDown';
import CommunityCard from './components/CommunityCard';
// Utils
import fetchContent from '../../../../utils/fetchContent';
import sortCompare from '../../../../utils/sortCompare';
// Styles
import './Community.css';

export default function Community() {
  const { languageId, section } = useContext(Context);
  const [communityPageTitle, setCommunityPageTitle] = useState();
  const [communityText, setCommunityText] = useState();
  const [communityMembers, setCommunityMembers] = useState();

  useEffect(() => {
    const getCommunityContent = async () => {
      const data = await fetchContent('community', languageId);
      if (data) {
        setCommunityPageTitle(data.title);
        setCommunityText(toHTML(data.text));
        const members = {
          custom: () => data.members,
          alphabetic: () => data.members.sort(sortCompare('name')),
        };
        setCommunityMembers(members[data.communityMembers.sort]());
      }
    };
    getCommunityContent();
  }, [languageId]);

  if (!communityMembers || !communityPageTitle) return null;

  return (
    <section ref={section.community} id="community">
      <div className="container section community-container">
        <div className="visible spacer" />
        <h1 className="display-3 text-uppercase text-center section-title community-title">{communityPageTitle}</h1>
        <div className="d-flex gx-4 gy-3 justify-content-center pb-1 pb-md-4 px-md-0 px-4">
          <div className="align-self-center">
            <div className="text-center text-lg-start community-text">
              {communityText && parse(communityText)}
            </div>
          </div>
        </div>
        <Tooltip anchorSelect=".community-card-tooltip" className="community-tooltip" />
        <div className="gy-4 row row-cols-auto justify-content-center">
          {
            communityMembers.map((member, index) => <CommunityCard key={index} member={member} index={index} />)
          }
        </div>
        <ArrowDown to="/application" />
      </div>
    </section>
  );
}
