import { PortableText } from '@portabletext/react';
import React from 'react';
import { CgOrganisation } from 'react-icons/cg';
import { TbLogout } from 'react-icons/tb';
import { TiTags } from 'react-icons/ti';
import { tv } from 'tailwind-variants';

import { Company } from '@/types/sectionsTypes';

const exit = tv({
  base: 'mx-1 hidden items-center rounded-2xl bg-red-800 px-2 pb-[1px] ps-3 text-lg text-white',
  variants: {
    exit: {
      true: 'flex',
    },
  },
});

export default function PortfolioCompanyInfo({
  company,
  showText,
}: {
  company: Company;
  showText?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="flex flex-nowrap items-center gap-1">
          <CgOrganisation className="text-2xl" />
          <span className="nowrap mb-0 pb-0 text-2xl font-700">{company?.name}</span>
          <div className={exit({ exit: company.exit })}>
            <span className=" text-base font-600">Exit</span>
            <TbLogout />
          </div>
        </div>
        {showText && <p className="text-left text-sm">{company?.description}</p>}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {company?.categories?.map((category) => (
            <p
              className="flex items-center gap-1 rounded-2xl border-2 px-3 text-lg font-700"
              key={category}
            >
              <TiTags />
              {category}
            </p>
          ))}
        </div>
      </div>
      {showText ? (
        <div className="text-xl">
          <PortableText value={company?.text} />
        </div>
      ) : (
        <p className="underline">Clique para mais informações</p>
      )}
    </div>
  );
}
