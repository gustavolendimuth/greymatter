'use client';

import './Portfolio.css';

import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import useScrollTo from 'app/_Hooks/useScrollTo';
import { useHomeContext } from 'context/Provider';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import CategoryButton from './components/CategoryButton';
import PortfolioCards from './components/PortfolioCards';
import PortfolioModal from './components/PortfolioModal';
import dataMock from './dataMock.json';

interface Company {
  id?: string;
  logo: {
    image: { asset: string };
    alt: string;
    whiteBackground: boolean;
    tone: string;
  };
  companyName: string;
  description: string;
  text: string;
  categories: string[];
}

interface PortfolioData {
  title: string;
  companies: Company[];
}

export default function Portfolio() {
  const [portfolioTitle, setPortfolioTitle] = useState<string>();
  const [portfolioCompanies, setPortfolioCompanies] = useState<Company[]>();
  const [categories, setCategories] = useState<string[]>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [allCompanies, setAllCompanies] = useState<Company[]>();
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company>();
  const router = useRouter();

  useScrollTo();
  const { languageId } = useHomeContext();

  const handleCategoryChange = (category: string | undefined) => {
    setPortfolioCompanies(undefined);
    setSelectedCategory(category);
    router.push('#portfolio', { scroll: true });

    setTimeout(() => {
      if (category) {
        const filteredCompanies = allCompanies?.filter(
          (company) => company.categories && company.categories.includes(category),
        );
        setPortfolioCompanies(filteredCompanies);
      } else {
        setPortfolioCompanies(allCompanies);
      }
    }, 500);
  };

  useEffect(() => {
    const getPortfolioContent = async () => {
      const data: PortfolioData = dataMock;
      if (data) {
        setPortfolioTitle(data.title);
        setAllCompanies(data.companies);
        setPortfolioCompanies(data.companies);
      }
    };
    getPortfolioContent();
  }, [languageId]);

  useEffect(() => {
    if (!allCompanies) return;

    const getCategories = (data: Company[]) => {
      const result: string[] = [];
      data?.forEach((company) => {
        company?.categories?.forEach((category) => {
          if (!result?.includes(category)) result.push(category);
        });
      });
      return result;
    };
    setCategories(getCategories(allCompanies));
  }, [allCompanies]);

  if (!portfolioTitle) return null;

  return (
    <Section id="portfolio" className="bg-ternary">
      <Container fullHeight gap className="lg:max-w-[1320px]">
        <div />
        <Title className="text-white">
          {portfolioTitle}
        </Title>
        <div className="flex-grow justify-center flex flex-col gap-calc-sm" id="portfolio-content">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
            <CategoryButton onClick={() => handleCategoryChange(undefined)}>
              All
            </CategoryButton>
            {categories
            && categories.map((category, index) => (
              <CategoryButton
                active={selectedCategory === category}
                key={index}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[292px] sm:max-w-[584px] md:max-w-[876px] lg:max-w-[1320px]"
          >
            <TransitionGroup component={null}>
              {portfolioCompanies?.map((company, index) => (
                <CSSTransition key={index} timeout={500} classNames="item">
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => {
                      setSelectedCompany(company);
                      setShowModal(true);
                      router.push('#portfolio', { scroll: true });
                    }}
                  >
                    <PortfolioCards company={company} />
                  </button>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>

        <DownArrow to="#insights" />
      </Container>
      <PortfolioModal showModal={showModal} setShowModal={setShowModal} company={selectedCompany} />
    </Section>
  );
}
