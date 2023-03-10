/* eslint-disable react/forbid-prop-types */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Components
import ArrowDown from '../../../../components/ArrowDown';
import HowWeInvestTree from './components/HowWeInvestTree';
// Styles
import './HowWeInvest.css';
import Context from '../../../../context/Context';
import fetchContent from '../../../../utils/fetchContent';

export default function HowWeInvest({ howWeInvest }) {
  const [howWeInvestPageTitle, setHowWeInvestPageTitle] = useState('');
  const [howWeInvestCards, setHowWeInvestCards] = useState('');
  const { languageId } = useContext(Context);

  useEffect(() => {
    const getHowWeInvestContent = async () => {
      const data = await fetchContent('howWeInvest', languageId);
      if (data) {
        setHowWeInvestPageTitle(data.pageTitle);
        setHowWeInvestCards(data.cards);
      }
    };
    getHowWeInvestContent();
  }, [languageId]);

  if (!howWeInvest || !howWeInvestPageTitle || !howWeInvestCards) return null;

  return (
    <section ref={ howWeInvest } className="how-we-invest-section" id="howWeInvest">
      <div className="container section how-we-invest">
        <div />
        <h1
          className="display-3 text-uppercase text-center section-title how-we-invest-title"
        >
          { howWeInvestPageTitle }
        </h1>
        <HowWeInvestTree cards={ howWeInvestCards } />
        <ArrowDown to="/team" />
      </div>
    </section>
  );
}

HowWeInvest.propTypes = {
  howWeInvest: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
};
