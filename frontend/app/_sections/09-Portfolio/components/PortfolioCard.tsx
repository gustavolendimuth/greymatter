import React from 'react';

import Img from '@/app/_components/Img';
import { ImageType } from '@/types/propertiesTypes';
import { Company } from '@/types/sectionsTypes';

const getFilterStyle = ({ brighten }: ImageType) => {
  return brighten ? 'brightness(0.15)' : 'brightness(0.5)';
};

const getImageSize = ({ orientation }: ImageType) => {
  return orientation === 'portrait' ? 'h-20' : 'h-12';
};

const getContainerStyle = ({ orientation }: ImageType) => {
  return orientation === 'portrait' ? 'py-4' : 'py-8';
};

export default function PortfolioCard({ company }: { company: Company }) {
  return (
    <div
      className={`${getContainerStyle(
        company.logo
      )} flex flex-col items-center justify-center rounded-lg border  border-white bg-white/0 px-10 transition hover:bg-white/25`}
    >
      <div
        style={{
          filter: `${getFilterStyle(company.logo)} invert(1) grayscale(1)`,
          mixBlendMode: 'lighten',
        }}
        className="flex items-center justify-center"
      >
        <Img
          className={`${getImageSize(company.logo)} object-contain`}
          image={company.logo}
          alt={company.logo.alt || 'logo'}
          width={128}
          height={128}
        />
      </div>
    </div>
  );
}
