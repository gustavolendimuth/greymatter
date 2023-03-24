/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React, { useEffect, useContext, useState } from 'react';
// Libraries
import parse from 'html-react-parser';
import { toHTML } from '@portabletext/to-html';
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
        setCommunityPageTitle(data.pageTitle);
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
    <section ref={ section.community } id="community">
      <div className="container section community-container">
        <div className="visible spacer" />
        <h1 className="display-3 text-uppercase text-center section-title community-title">{communityPageTitle}</h1>
        <div className="row gx-4 gy-3 justify-content-center my-1 my-md-4">
          <div className="col-auto align-self-center">
            <div className="text-center text-lg-start community-text">
              { communityText && parse(communityText) }
            </div>
          </div>
        </div>
        <Tooltip anchorSelect=".community-card-tooltip" className="community-tooltip" />
        <div className="row gx-5 gy-4 gy-md-5 row-cols-4 justify-content-center">
          {
            communityMembers.map((member, index) => <CommunityCard key={ index } member={ member } index={ index } />)
          }
        </div>
        <ArrowDown to="/application" />
      </div>
    </section>
  );
}
