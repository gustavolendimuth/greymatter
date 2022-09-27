/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import HomeContext from '../context/HomeContext';
import urlFor from '../services/urlFor';
import CommunityCard from './CommunityCard';
import fetchContent from '../services/fetchContent';

export default function Community({ community }) {
  const { languageId } = useContext(HomeContext);
  const [communityPageTitle, setCommunityPageTitle] = useState();
  const [communityText, setCommunityText] = useState();
  const [communityImage, setCommunityImage] = useState();
  const [communityMembers, setCommunityMembers] = useState();

  useEffect(() => {
    const getCommunityContent = async () => {
      const data = await fetchContent('community', languageId);
      if (data) {
        setCommunityPageTitle(data.pageTitle);
        setCommunityText(toHTML(data.text));
        setCommunityImage(data.image);
        setCommunityMembers(data.members);
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
            <div className="community-image-container">
              <img
                alt={ communityImage?.alt }
                src={
                  communityImage
                && urlFor(communityImage.imageLg.asset)
                }
                className="community-image"
                height="80px"
              />
            </div>
          </div>
          <div className="col-auto align-self-center">
            <div className="text-center text-lg-start community-text">
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
        <Link className="btn" role="button" to="/application">
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

Community.propTypes = {
  community: PropTypes.any.isRequired,
};
