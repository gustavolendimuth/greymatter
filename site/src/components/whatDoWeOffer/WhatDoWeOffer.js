/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
import HomeContext from '../../context/HomeContext';
import fetchContent from '../../services/fetchContent';
import ArrowDown from '../ArrowDown';
import WhatDoWeOfferCard from './WhatDoWeOfferCard';

export default function WhatDoWeOffer({ whatDoWeOffer }) {
  const { languageId } = useContext(HomeContext);
  const [whatDoWeOfferPageTitle, setWhatDoWeOfferPageTitle] = useState();
  const [whatDoWeOfferCards, setWhatDoWeOfferCards] = useState();

  useEffect(() => {
    const getWhatDoWeOfferContent = async () => {
      const data = await fetchContent('whatDoWeOffer', languageId);
      if (data) {
        setWhatDoWeOfferPageTitle(data.pageTitle);
        setWhatDoWeOfferCards(data.cards);
      }
    };
    getWhatDoWeOfferContent();
  }, [languageId]);

  return (
    <section ref={ whatDoWeOffer } id="what-do-we-offer">
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
        <ArrowDown to="/team" />
      </div>
    </section>
  );
}

WhatDoWeOffer.propTypes = {
  whatDoWeOffer: PropTypes.any.isRequired,
};
