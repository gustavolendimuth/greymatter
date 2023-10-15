/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useHomeContext } from 'context/Provider';
import { useRouter } from 'next-intl/client';
import React, { useEffect, useState } from 'react';

import CategoryButton from './CategoryButton';
import { Company } from './PortfolioGrid';

export default function CategoryNavbar({ companies: allCompanies }: { companies: Company[] }) {
  const [categories, setCategories] = useState<string[]>();
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const { setCompanies } = useHomeContext();

  const router = useRouter();

  useEffect(() => {
    if (!allCompanies) return;
    setCompanies(allCompanies);
  }, []);

  const handleCategoryChange = (category: string | undefined) => {
    setCompanies(undefined);
    setSelectedCategory(category);
    router.push('#portfolio', { scroll: true });

    setTimeout(() => {
      if (category) {
        const filteredCompanies = allCompanies?.filter(
          (company) => company.categories && company.categories.includes(category),
        );
        setCompanies(filteredCompanies);
      } else {
        setCompanies(allCompanies);
      }
    }, 500);
  };

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

  return (
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
  );
}
