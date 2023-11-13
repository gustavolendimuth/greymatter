import Modal from 'app/_components/Modal';
import React from 'react';

import { Company } from '@/types/sectionsTypes';

import PortfolioCompanyInfo from './PortfolioCompanyInfo';

interface PortfolioModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  company: Company;
}

export default function PortfolioModal({ showModal, setShowModal, company }: PortfolioModalProps) {
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <PortfolioCompanyInfo company={company} showText={true} />
    </Modal>
  );
}
