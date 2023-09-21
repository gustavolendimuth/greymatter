import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// Components
import ArrowDown from '../../../components/ArrowDown';
import WhatWeLookForCards from './components/WhatWeLookForCards';
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
      ref={section.whatWeLookFor}
      id="what-we-look-for"
      style={{ background: `url(${whatWeLookForBackground && urlFor(whatWeLookForBackground.imageLg?.asset).url()}) center / cover space` }}
    >
      <Container className="section gap-2">
        <div className="visible spacer" />
        <h1 id="title" className="display-3 text-nowrap text-uppercase text-center text-light section-title what-we-look-for-title">
          {whatWeLookForTitle}
        </h1>
        <Row className="gx-3 gy-3 gx-lg-5 gy-lg-4 justify-content-center align-items-stretch">
          {whatWeLookForCards && whatWeLookForCards.map((card, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <WhatWeLookForCards card={card} index={index} />
            </Col>
          ))}
        </Row>
        <div>
          <ArrowDown to="/what-do-we-offer" />
        </div>
      </Container>
    </section>
  );
}
