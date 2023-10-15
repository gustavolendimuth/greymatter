'use client';

import { useHomeContext } from 'context/Provider';
import { useRouter } from 'next-intl/client';
import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PortfolioCards from './PortfolioCards';
import PortfolioModal from './PortfolioModal';

export type Company = {
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
};

export default function PortfolioGrid() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company>();
  const router = useRouter();

  const { companies } = useHomeContext();
  console.log('companies', companies);

  if (!companies) return null;

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[292px] sm:max-w-[584px] md:max-w-[876px] lg:max-w-[1320px]"
    >
      <TransitionGroup component={null}>
        {companies?.map((company, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => {
                setSelectedCompany(company);
                setShowModal(true);
                router.push('#portfolio', { scroll: false });
              }}
            >
              <PortfolioCards company={company} />
            </button>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <PortfolioModal showModal={showModal} setShowModal={setShowModal} company={selectedCompany} />
    </div>
  );
}
