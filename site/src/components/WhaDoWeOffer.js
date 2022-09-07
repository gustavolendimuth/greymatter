/* eslint-disable sonarjs/no-identical-expressions */
import React, { useEffect, useContext, useState } from 'react';
import sanityClient from '../services/sanityClient';
// import urlFor from '../services/urlFor';
import HomeContext from '../context/HomeContext';
import WhatDoWeOfferCard from './WhatDoWeOfferCard';

export default function WhaDoWeOffer() {
  const { languageId } = useContext(HomeContext);
  const [whatDoWeOfferPageTitle, setWhatDoWeOfferPageTitle] = useState();
  const [whatDoWeOfferCards, setWhatDoWeOfferCards] = useState();

  useEffect(() => {
    if (languageId) {
      sanityClient.fetch(
        `*[_type == "whatDoWeOffer" 
          && language._ref == "${languageId}" 
          && preview.isPreview == false] | order(_createdAt asc)[0] {
        background,
        cards,
        pageTitle,
      }`,
      ).then((data) => {
        if (data) {
          setWhatDoWeOfferPageTitle(data.pageTitle);
          setWhatDoWeOfferCards(data.cards);
        }
      })
        .catch((e) => console.error(e));
    }
  }, [languageId]);

  return (
    <section id="what-do-we-offer">
      <div className="container section wha-do-we-offer-section">
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
              .map((card, index) => <WhatDoWeOfferCard key={ index } card={ card } />)
          }
        </div>
        <a className="btn" role="button" href="#team">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-64 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            className="text-primary arrow-down"
            alt="Arrow down"
          >
            <path
              d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
