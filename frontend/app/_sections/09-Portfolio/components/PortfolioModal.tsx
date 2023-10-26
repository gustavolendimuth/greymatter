import { PortableText } from '@portabletext/react';
import Modal from 'app/_components/Modal';
import React from 'react';
import { CgOrganisation } from 'react-icons/cg';
import { TbLogout } from 'react-icons/tb';
import { TiTags } from 'react-icons/ti';
import { tv } from 'tailwind-variants';

import { Company } from '@/types/sectionsTypes';

interface PortfolioModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  company: Company;
}

const exit = tv({
  base: 'mx-1 hidden items-center rounded-2xl bg-red-800 px-2 pb-[1px] ps-3 text-lg text-white',
  variants: {
    exit: {
      true: 'flex',
    },
  },
});

export default function PortfolioModal({ showModal, setShowModal, company }: PortfolioModalProps) {
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <div>
        <div className="flex items-center gap-1 text-2xl font-700">
          <CgOrganisation />
          <span>{company?.name}</span>
          <div className={exit({ exit: company.exit })}>
            <span className=" text-base font-600">Exit</span>
            <TbLogout />
          </div>
        </div>
        <p className="text-sm">{company?.description}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-3">
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
      <div className="text-xl">
        <PortableText value={company?.text} />
      </div>
    </Modal>
  );
}
