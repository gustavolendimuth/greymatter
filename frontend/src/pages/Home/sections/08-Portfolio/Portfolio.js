/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// Components
import ArrowDown from '../../../components/ArrowDown';
// Context
import Context from '../../../../context/Context';
// Utils
// Styles
import './Portfolio.css';
// Mock
import PortfolioCards from './components/PortfolioCards';
import dataMock from './dataMock.json';

export default function Portfolio() {
  const { languageId, section } = useContext(Context);
  const [portfolioTitle, setPortfolioTitle] = useState();
  // const [portfolioBackground, setPortfolioBackground] = useState();
  const [portfolioCompanies, setPortfolioCompanies] = useState();

  useEffect(() => {
    const getPortfolioContent = async () => {
      // const data = await fetchContent('whatWeLookFor', languageId);
      const data = dataMock;
      if (data) {
        setPortfolioTitle(data.title);
        // setPortfolioBackground(data.background);
        setPortfolioCompanies(data.companies);
      }
    };
    getPortfolioContent();
  }, [languageId]);

  if (!portfolioTitle || !portfolioCompanies) return null;

  return (
    <section
      ref={section.whatWeLookFor}
      id="what-we-look-for"
      // style={{ background: `url(${portfolioBackground && urlFor(portfolioBackground.imageLg?.asset).url()}) center / cover space` }}
      className="section-portfolio"
    >
      <Container className="section gap-2">
        <div className="visible spacer" />
        <h1 id="title" className="display-3 text-nowrap text-uppercase text-center text-light section-title portfolio-title">
          {portfolioTitle}
        </h1>
        <Row className="g-3 g-lg-4">
          {portfolioCompanies && portfolioCompanies.map((company, index) => (
            <Col key={index} xs={6} md={4} lg={3}>
              <PortfolioCards company={company} index={index} />
            </Col>
          ))}
        </Row>
        <ArrowDown to="/application" />
      </Container>
    </section>
  );
}
