/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useHomeContext } from 'context/Provider';
import { useRouter } from 'next-intl/client';
import React, { useEffect, useState } from 'react';

import { Company } from '@/types/sectionsTypes';

import PortfolioCard from './PortfolioCard';
import PortfolioModal from './PortfolioModal';

export default function PortfolioGrid() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company>();
  const router = useRouter();

  const { companies, setAnimationClass, animationClass } = useHomeContext();

  useEffect(() => {
    if (!companies) return;
    setAnimationClass('fade-in'); // Apply the fade-in class
  }, [companies]);

  if (!companies) return null;

  return (
    <div
      className={`xs:grid-cols-2 mx-auto grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ${animationClass}`}
    >
      {companies?.map((company, index) => (
        <button
          key={index}
          className="focus:outline-none"
          type="button"
          onClick={() => {
            setSelectedCompany(company);
            setShowModal(true);
            router.push('#portfolio', { scroll: true });
          }}
        >
          <PortfolioCard company={company} />
        </button>
      ))}
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
