/* eslint-disable react/forbid-prop-types */
import React, { useContext, useEffect, useState } from 'react';
// Components
import ArrowDown from '../../../components/ArrowDown';
import HowWeInvestTree from './components/HowWeInvestTree';
// Context
import Context from '../../../../context/Context';
// Utils
import fetchContent from '../../../../utils/fetchContent';
// Styles
import './HowWeInvest.css';

export default function HowWeInvest() {
  const [howWeInvestPageTitle, setHowWeInvestPageTitle] = useState();
  const [howWeInvestCards, setHowWeInvestCards] = useState();
  const [howWeInvestFirstCard, setHowWeInvestFirstCard] = useState();
  const { languageId, section } = useContext(Context);

  useEffect(() => {
    const getHowWeInvestContent = async () => {
      if (!languageId) return;
      const data = await fetchContent('howWeInvest', languageId);
      if (data) {
        setHowWeInvestPageTitle(data.title);
        setHowWeInvestCards(data.cards);
        setHowWeInvestFirstCard(data.firstCard);
      }
    };
    getHowWeInvestContent();
  }, [languageId]);

  if (!howWeInvestPageTitle || !howWeInvestCards) return null;

  return (
    <section ref={ section.howWeInvest } className="how-we-invest-section" id="howWeInvest">
      <div className="container section how-we-invest">
        <div />
        <h1
          className="display-3 text-uppercase text-center section-title how-we-invest-title"
        >
          { howWeInvestPageTitle }
        </h1>
        <HowWeInvestTree cards={ howWeInvestCards } firstCard={ howWeInvestFirstCard } />
        <ArrowDown to="/team" />
      </div>
    </section>
  );
}
