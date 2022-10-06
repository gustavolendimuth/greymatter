/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import HomeContext from '../../context/HomeContext';
import fetchContent from '../../services/fetchContent';

import urlFor from '../../services/urlFor';
import ArrowDown from '../ArrowDown';
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
          <ArrowDown to="/what-do-we-offer" />
        </div>
      </div>
    </section>
  );
}

WhatWeLookFor.propTypes = {
  whatWeLookFor: PropTypes.any.isRequired,
};
