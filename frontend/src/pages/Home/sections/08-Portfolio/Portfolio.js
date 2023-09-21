/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// Utils
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Components
import ArrowDown from '../../../components/ArrowDown';
// Context
import Context from '../../../../context/Context';
// Styles
import './Portfolio.css';
// Mock
import PortfolioCards from './components/PortfolioCards';
import PortfolioModal from './components/PortfolioModal';
import dataMock from './dataMock.json';

export default function Portfolio() {
  const { languageId, section } = useContext(Context);
  const [portfolioTitle, setPortfolioTitle] = useState();
  const [portfolioCompanies, setPortfolioCompanies] = useState();
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [allCompanies, setAllCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState();
  // const [gridHeight, setGridHeight] = useState('500px');

  // useEffect(() => {
  //   if (allCompanies) {
  //     const numberOfRows = Math.ceil(allCompanies.length / 4);
  //     const rowHeight = 250;
  //     setGridHeight(`${numberOfRows * rowHeight}px`);
  //   }
  // }, [allCompanies]);

  const handleCategoryChange = (category) => {
    setPortfolioCompanies(null);
    setSelectedCategory(category);

    setTimeout(() => {
      if (category) {
        const filteredCompanies = allCompanies.filter((company) => company.categories && company.categories.includes(category));
        setPortfolioCompanies(filteredCompanies);
      } else {
        setPortfolioCompanies(allCompanies);
      }
    }, 500);
    section.portfolio.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!allCompanies) return;

    const getCategories = (data) => {
      const result = [];
      data?.forEach((company) => {
        company?.categories?.forEach((category) => {
          if (!result?.includes(category)) result.push(category);
        });
      });
      return result;
    };
    setCategories(getCategories(allCompanies));
  }, [allCompanies]);

  useEffect(() => {
    if (!categories) return;
    console.log(categories);
  }, [categories]);

  useEffect(() => {
    const getPortfolioContent = async () => {
      // const data = await fetchContent('whatWeLookFor', languageId);
      const data = dataMock;
      if (data) {
        setPortfolioTitle(data.title);
        setAllCompanies(data.companies);
        setPortfolioCompanies(data.companies);
      }
    };
    getPortfolioContent();
  }, [languageId]);

  if (!portfolioTitle) return null;

  return (
    <section
      ref={section.portfolio}
      id="portfolio"
      className="section-portfolio full-height"
    >
      <Container>
        <div className="visible spacer" />
        <h1 id="title" className="display-3 text-nowrap text-uppercase text-center text-light section-title portfolio-title">
          {portfolioTitle}
        </h1>

        {/* Category Filter Bar */}
        <div className="category-filter-bar">
          <button type="button" onClick={() => handleCategoryChange(null)}>All</button>
          {categories && categories.map((category, index) => (
            <button className={selectedCategory === category ? 'active' : ''} type="button" key={index} onClick={() => handleCategoryChange(category)}>
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Companies Grid */}
        <div>
          <div className="portfolio-grid">
            <TransitionGroup component={null}>
              {portfolioCompanies?.map((company, index) => (
                <CSSTransition key={company.id} timeout={500} classNames="item">
                  <button
                    className="unstyled-button"
                    type="button"
                    onClick={() => {
                      setShowModal(true);
                      setSelectedCompany(company);
                    }}
                  >
                    <PortfolioCards company={company} index={index} />
                  </button>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>

        <ArrowDown className="portfolio-arrow-down" to="/application" />
        <PortfolioModal showModal={showModal} company={selectedCompany} setShowModal={setShowModal} />
      </Container>
    </section>
  );
}
