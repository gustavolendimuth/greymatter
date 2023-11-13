/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import './PortfolioGrid.css';

import { useHomeContext } from 'context/Provider';
import { useRouter } from 'next-intl/client';
import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { Company } from '@/types/sectionsTypes';

import PortfolioCard from './PortfolioCard';
import PortfolioCompanyInfo from './PortfolioCompanyInfo';
import PortfolioModal from './PortfolioModal';

export default function PortfolioGrid() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company>();
  const [hoveredCompany, setHoveredCompany] = useState<Company | null>(null);
  const router = useRouter();

  const { companies, setAnimationClass, animationClass } = useHomeContext();

  useEffect(() => {
    if (!companies) return;
    setAnimationClass('fade-in');
  }, [companies]);

  if (!companies) return null;

  return (
    <div
      className={`mx-auto grid grid-cols-2 gap-5 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ${animationClass}`}
    >
      {companies?.map((company, index) => (
        <button
          key={index}
          className="portfolio-tooltip-anchor focus:outline-none"
          type="button"
          onMouseEnter={() => setHoveredCompany(company)}
          onMouseLeave={() => setHoveredCompany(null)}
          onClick={() => {
            setSelectedCompany(company);
            setShowModal(true);
            // router.push('#portfolio', { scroll: true });
          }}
        >
          <PortfolioCard company={company} />
        </button>
      ))}
      <Tooltip
        anchorSelect=".portfolio-tooltip-anchor"
        className="portfolio-tooltip nowrap sm:none hidden w-fit md:block"
      >
        {hoveredCompany && <PortfolioCompanyInfo company={hoveredCompany} />}
      </Tooltip>
      {selectedCompany && (
        <PortfolioModal
          showModal={showModal}
          setShowModal={setShowModal}
          company={selectedCompany}
        />
      )}
    </div>
  );
}
