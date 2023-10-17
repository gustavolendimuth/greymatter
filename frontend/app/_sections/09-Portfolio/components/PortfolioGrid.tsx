'use client';

import { useHomeContext } from 'context/Provider';
import { useRouter } from 'next-intl/client';
import React, { useEffect, useState } from 'react';

import PortfolioCard from './PortfolioCard';
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

  const { companies, setAnimationClass, animationClass } = useHomeContext();
  console.log('animationClass', animationClass);

  useEffect(() => {
    if (!companies) return;
    setAnimationClass('fade-in'); // Apply the fade-in class
  }, [companies]);

  if (!companies) return null;

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[292px] sm:max-w-[584px] md:max-w-[876px] lg:max-w-[1320px] ${animationClass}`}
    >
      {/* <TransitionGroup component={null} appear> */}
      {companies?.map((company, index) => (
        // <CSSTransition key={index} timeout={500} classNames="item">
        <button
          key={index}
          className="focus:outline-none"
          type="button"
          onClick={() => {
            setSelectedCompany(company);
            setShowModal(true);
            router.push('#portfolio', { scroll: false });
          }}
        >
          <PortfolioCard company={company} />
        </button>
        // </CSSTransition>
      ))}
      {/* </TransitionGroup> */}
      <PortfolioModal showModal={showModal} setShowModal={setShowModal} company={selectedCompany} />
    </div>
  );
}
