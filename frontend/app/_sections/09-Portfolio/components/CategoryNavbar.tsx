/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useHomeContext } from 'context/Provider';
import { useRouter } from 'next-intl/client';
import React, { useEffect, useState } from 'react';

import { Company } from '@/types/sectionsTypes';

import CategoryButton from './CategoryButton';

export default function CategoryNavbar({ companies: allCompanies }: { companies: Company[] }) {
  const [categories, setCategories] = useState<string[]>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const { setCompanies, setAnimationClass } = useHomeContext();

  const router = useRouter();

  useEffect(() => {
    if (!allCompanies) return;
    setCompanies(allCompanies);
  }, []);

  const handleCategoryChange = (category: string | undefined) => {
    setAnimationClass('fade-out');
    setSelectedCategory(category);
    router.push('#portfolio', { scroll: true });

    setTimeout(() => {
      if (category) {
        const filteredCompanies = allCompanies?.filter((company) => {
          const companyCategories = company.categories.map((category) => category.toLowerCase());
          return companyCategories.includes(category);
        });
        setCompanies(filteredCompanies);
      } else {
        setCompanies(allCompanies);
      }
      setAnimationClass('fade-in');
    }, 500);
  };

  useEffect(() => {
    if (!allCompanies) return;

    const getCategories = (data: Company[]) => {
      const result: string[] = [];
      data?.forEach((company) => {
        company?.categories?.forEach((category) => {
          const lowerCaseCategory = category.toLowerCase();
          if (!result?.includes(lowerCaseCategory)) result.push(lowerCaseCategory);
        });
      });
      return result.sort();
    };
    setCategories(getCategories(allCompanies));
  }, [allCompanies]);

  return (
    <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
      <CategoryButton onClick={() => handleCategoryChange(undefined)}>All</CategoryButton>
      {categories &&
        categories.map((category, index) => (
          <CategoryButton
            active={selectedCategory === category}
            key={index}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryButton>
        ))}
    </div>
  );
}
