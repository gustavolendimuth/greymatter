/* eslint-disable react/forbid-prop-types */
/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import urlFor from '../../../../utils/urlFor';
import Context from '../../../../context/Context';
import fetchContent from '../../../../utils/fetchContent';
import ArrowDown from '../../../../components/ArrowDown';
import './WhoWeAre.css';

export default function WhoWeAre({ whoWeAre = 'whoWeAre' }) {
  const [whoWeArePageTitle, setWhoWeArePageTitle] = useState('');
  const [whoWeAreText, setWhoWeAreText] = useState('');
  const [whoWeAreImage, setWhoWeAreImage] = useState();
  const { languageId } = useContext(Context);

  useEffect(() => {
    const getWhoWeAreContent = async () => {
      const data = await fetchContent('whoWeAre', languageId);
      if (data) {
        setWhoWeArePageTitle(data.pageTitle);
        setWhoWeAreImage(data.image);
        setWhoWeAreText(toHTML(data.text));
      }
    };
    getWhoWeAreContent();
  }, [languageId]);

  return (
    <section ref={ whoWeAre } id="whoWeAre">
      <div className="container section who-we-are-section">
        <div />
        <h1
          className="display-3 text-uppercase text-center section-title who-we-are-title"
        >
          { whoWeArePageTitle && whoWeArePageTitle }
        </h1>
        <div className="row gx-4 gy-5">
          <div className="col-12 col-lg-7">
            <div className="text-center text-lg-start who-we-are-text">
              { whoWeAreText && parse(whoWeAreText)}
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center order-first order-lg-last">
            <img
              src={
                whoWeAreImage
                && urlFor(whoWeAreImage.imageLg.asset)
              }
              className="who-we-are-image"
              alt={ whoWeAreImage?.alt }
            />
          </div>
        </div>
        <ArrowDown to="/what-we-look-for" />
      </div>
    </section>
  );
}

WhoWeAre.propTypes = {
  whoWeAre: PropTypes.any.isRequired,
};
