/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
// Components
import WhatWeLookForCards from './components/WhatWeLookForCards';
import ArrowDown from '../../../components/ArrowDown';
// Context
import Context from '../../../../context/Context';
// Utils
import fetchContent from '../../../../utils/fetchContent';
import urlFor from '../../../../utils/urlFor';
// Styles
import './WhatWeLookFor.css';

export default function WhatWeLookFor() {
  const { languageId, section } = useContext(Context);
  const [whatWeLookForTitle, setWhatWeLookForTitle] = useState();
  const [whatWeLookForBackground, setWhatWeLookForBackground] = useState();
  const [whatWeLookForCards, setWhatWeLookForCards] = useState();

  useEffect(() => {
    const getWhatWeLookForContent = async () => {
      const data = await fetchContent('whatWeLookFor', languageId);
      if (data) {
        setWhatWeLookForTitle(data.title);
        setWhatWeLookForBackground(data.background);
        setWhatWeLookForCards(data.cards);
      }
    };
    getWhatWeLookForContent();
  }, [languageId]);

  if (!whatWeLookForTitle || !whatWeLookForCards) return null;

  return (
    <section
      ref={ section.whatWeLookFor }
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
