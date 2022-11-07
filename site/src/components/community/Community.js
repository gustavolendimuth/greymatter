/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import HomeContext from '../../context/HomeContext';
import CommunityCard from './CommunityCard';
import fetchContent from '../../services/fetchContent';
import sortCompare from '../../services/sortCompare';
import ArrowDown from '../ArrowDown';

export default function Community({ community }) {
  const { languageId } = useContext(HomeContext);
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

  return (
    <section ref={ community } id="community">
      <div className="container section community-container">
        <div className="visible spacer" />
        <h1 className="display-3 text-uppercase text-center section-title community-title">{communityPageTitle}</h1>
        <div className="row gx-4 gy-3 justify-content-center my-1 my-md-4">
          <div className="col-auto align-self-center">
            <div className="text-center community-text">
              { communityText && parse(communityText) }
            </div>
          </div>
        </div>
        <div className="row gx-5 gy-4 gy-md-5 row-cols-4 justify-content-center">
          {
            communityMembers
              && communityMembers.map((member, index) => <CommunityCard key={ index } member={ member } />)
          }
        </div>
        <ArrowDown to="/application" />
      </div>
    </section>
  );
}

Community.propTypes = {
  community: PropTypes.any.isRequired,
};
