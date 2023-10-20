import Image from 'next/image';
import React from 'react';

type LogoProps = {
  alt?: string;
  whiteBackground?: boolean;
  tone?: string;
  image?: { asset: string };
};

type CompanyProps = {
  logo: LogoProps;
};

type PortfolioCardsProps = {
  company: CompanyProps;
};

export default function PortfolioCard({ company }: PortfolioCardsProps) {
  const getFilterStyle = () => {
    if (company.logo.whiteBackground) return '';
    return company.logo.tone === 'dark' ? 'brightness(0.5)' : 'brightness(0.15)';
  };

  return (
    <div className="p-7 flex flex-col items-center justify-center bg-white/0  hover:bg-white/25 transition rounded-lg border-white border">
      <div
        style={{
          filter: `${getFilterStyle()} invert(1) grayscale(1)`,
          mixBlendMode: 'lighten',
        }}
        className="flex items-center justify-center"
      >
        <Image
          className="h-[80px] w-44 object-contain"
          src={company?.logo?.image?.asset || ''}
          alt={company.logo.alt || 'logo'}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
