/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeContext from '../context/HomeContext';
import fetchContent from '../services/fetchContent';

import urlFor from '../services/urlFor';
import WhatWeLookForCards from './WhatWeLookForCards';

export default function WhatWeLookFor({ whatWeLookFor }) {
  const { languageId } = useContext(HomeContext);
  const [whatWeLookForTitle, setWhatWeLookForTitle] = useState();
  const [whatWeLookForBackground, setWhatWeLookForBackground] = useState();
  const [whatWeLookForCards, setWhatWeLookForCards] = useState();

  useEffect(() => {
    const getWhatWeLookForContent = async () => {
      const data = await fetchContent('whatWeLookFor', languageId);
      if (data) {
        setWhatWeLookForTitle(data.pageTitle);
        setWhatWeLookForBackground(data.background);
        setWhatWeLookForCards(data.cards);
      }
    };
    getWhatWeLookForContent();
  }, [languageId]);

  return (
    <section
      ref={ whatWeLookFor }
      id="what-we-look-for"
      style={ { background: `url(${whatWeLookForBackground && urlFor(whatWeLookForBackground.imageLg?.asset).url()}) center / cover space` } }
    >
      <div className="container section gap-2">
        <div className="visible spacer" />
        <h1
          className="display-3 text-nowrap text-uppercase text-center text-light section-title what-we-look-for-title"
        >
          {whatWeLookForTitle && whatWeLookForTitle}
        </h1>
        <div
          className="row gx-3 gy-3 gx-lg-5 gy-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center align-items-stretch"
        >
          {
            whatWeLookForCards
            && whatWeLookForCards
              .map((card, index) => <WhatWeLookForCards key={ index } card={ card } index={ index } />)
          }
        </div>
        <div>
          <Link className="btn" role="button" to="/what-do-we-offer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-64 0 512 512"
              width="1em"
              height="1em"
              fill="currentColor"
              className="text-light arrow-down"
              alt="Arrow down"
            >
              <path
                d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

WhatWeLookFor.propTypes = {
  whatWeLookFor: PropTypes.any.isRequired,
};
