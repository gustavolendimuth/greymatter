/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
import React, { useEffect, useContext, useState } from 'react';
// Components
import ArrowDown from '../../../components/ArrowDown';
import WhatDoWeOfferCard from './components/WhatDoWeOfferCard';
// Context
import Context from '../../../../context/Context';
import fetchContent from '../../../../utils/fetchContent';
// Styles
import './WhatDoWeOffer.css';

export default function WhatDoWeOffer() {
  const { languageId, section } = useContext(Context);
  const [whatDoWeOfferPageTitle, setWhatDoWeOfferPageTitle] = useState();
  const [whatDoWeOfferCards, setWhatDoWeOfferCards] = useState();

  useEffect(() => {
    const getWhatDoWeOfferContent = async () => {
      const data = await fetchContent('whatDoWeOffer', languageId);
      if (data) {
        setWhatDoWeOfferPageTitle(data.title);
        setWhatDoWeOfferCards(data.cards);
      }
    };
    getWhatDoWeOfferContent();
  }, [languageId]);

  if (!whatDoWeOfferPageTitle || !whatDoWeOfferCards) return null;

  return (
    <section ref={ section.whatDoWeOffer } id="what-do-we-offer">
      <div className="container section what-do-we-offer-section">
        <div className="visible spacer" />
        <h1 className="display-3 text-uppercase text-center section-title">
          {
            whatDoWeOfferPageTitle && whatDoWeOfferPageTitle
          }
        </h1>
        <div className="row gx-2 gy-2 gx-lg-5 gy-lg-5 row-cols-2 row-cols-md-3 d-flex justify-content-center flex-wrap">
          {
            whatDoWeOfferCards
            && whatDoWeOfferCards
              .map((card, index) => <WhatDoWeOfferCard key={ index } card={ card } index={ index } />)
          }
        </div>
        <ArrowDown to="/how-we-invest" />
      </div>
    </section>
  );
}
