import PropTypes from 'prop-types';
import React from 'react';
import { Container, Modal } from 'react-bootstrap';
import { CgOrganisation } from 'react-icons/cg';
import { TiTags } from 'react-icons/ti';
import './PortfolioModal.css';

export default function PortfolioModal({ showModal, setShowModal, company }) {
  // const { languageId } = useContext(Context);
  // const englishId = 'd3761ab6-c643-40b1-9233-00802f961ce6';

  return (
    <Container>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Body className="px-4 pb-4 px-md-5 pb-md-5">
          <Modal.Header closeButton className="border-bottom-0 px-0">
            <Modal.Title>
              <div>
                <p className="fw-bold d-flex align-items-center gap-1">
                  <CgOrganisation />
                  {company?.companyName}
                </p>
                <p className="fs-6">
                  {company?.description}
                </p>
              </div>

            </Modal.Title>
          </Modal.Header>
          <div className="d-flex flex-column justify-content-between gap-3">
            <div className="d-flex gap-3 flex-wrap">
              {company?.categories?.map((category) => (
                <p className="text-nowrap fw-bold fs-5 d-flex align-items-center" key={category}>
                  <TiTags />
                  {category}
                </p>
              ))}
            </div>
            {/* {company?.categories?.join(', ')} */}
            <p className="fs-5">
              {company?.text}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

PortfolioModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  company: PropTypes.shape({
    companyName: PropTypes.string,
    description: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
  }).isRequired,
};
