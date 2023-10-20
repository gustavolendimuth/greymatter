import Modal from 'app/_components/Modal';
import React from 'react';
import { CgOrganisation } from 'react-icons/cg';
import { TiTags } from 'react-icons/ti';

interface PortfolioModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  company?: {
    companyName: string;
    description: string;
    categories: string[];
    text: string;
  };
}

export default function PortfolioModal({ showModal, setShowModal, company }: PortfolioModalProps) {
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <div className="text-2xl">
        <div className="flex items-center gap-1 font-700">
          <CgOrganisation />
          <p>{company?.companyName}</p>
        </div>
        <p className="text-sm">{company?.description}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3 flex-wrap">
          {company?.categories?.map((category) => (
            <p className="font-700 text-lg flex gap-1 items-center" key={category}>
              <TiTags />
              {category}
            </p>
          ))}
        </div>
      </div>
      <p className="text-xl">{company?.text}</p>
    </Modal>
  );
}
