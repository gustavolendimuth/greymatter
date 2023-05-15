import React, { useContext, useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import Context from '../../../context/Context';
import './HomeModal.css';
import report from '../../assets/pdf/Report-Pesquisa-Grey-Matter-02-mai-2023(5440426.1).pdf';

export default function HomeModal() {
  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);
  const { languageId } = useContext(Context);
  const englishId = 'd3761ab6-c643-40b1-9233-00802f961ce6';
  const { REACT_APP_BACKEND_URL } = process.env;

  const subtitleEn = 'REGULATORY ROADBLOCKS FOR INNOVATION & ENTREPRENEURSHIP IN BRAZIL';
  const subtitlePt = 'OBSTÁCULOS REGULATÓRIOS À INOVAÇÃO E AO EMPREENDEDORISMO NO BRASIL';
  const textEn = 'Here is the report of the research we conducted with projects facing regulatory obstacles in Brazil. Our purpose is to build an advocacy agenda to enable innovative projects with potential to transform Brazil.';
  const textPt = 'Confira o report da pesquisa que realizamos com projetos que enfrentam obstáculos regulatórios no Brasil. Nosso objetivo é construir uma pauta de advocacy para viabilizar projetos inovadores com potencial transformador para o País.';

  const handleClose = () => setShowModal(false);

  function downloadPdf() {
    const link = document.createElement('a');
    link.href = report;
    link.target = '_blank';
    // link.download = 'your_pdf_file_name.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      downloadPdf();
      const response = await axios.post(REACT_APP_BACKEND_URL, { email, name });
      setSubmitStatus(response.data.message);
    } catch (error) {
      setSubmitStatus('An error occurred while submitting the form');
    }

    setEmail('');
    setName('');
    handleClose();
  };

  return (
    <Container>
      <Modal show={ showModal } onHide={ handleClose }>
        <Form onSubmit={ handleSubmit }>
          <Modal.Header className="border-bottom-0">
            <Modal.Title className="modal-title-centered">
              <h2 className="text-secondary">
                { languageId === englishId ? 'RESEARCH' : 'PESQUISA'}
              </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-5 py-4">
            <div className="pb-3">
              <p className="py-2 fs-6">
                <b>
                  {
                    languageId === englishId
                      ? subtitleEn
                      : subtitlePt
                  }
                </b>
              </p>
              <p className="py-2 fs-6">
                {
                  languageId === englishId
                    ? textEn
                    : textPt
                }
              </p>
            </div>
            <div className="d-flex flex-column gap-3">
              <Form.Group controlId="name">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={ name }
                  onChange={ (event) => setName(event.target.value) }
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={ email }
                  onChange={ (event) => setEmail(event.target.value) }
                  required
                />
              </Form.Group>
            </div>
            <div className="modal-footer d-flex justify-content-center gap-4">
              <Button variant="secondary" type="button" onClick={ handleClose }>
                { languageId === englishId ? 'Close' : 'Fechar' }
              </Button>
              <Button variant="primary" type="submit">
                Download
              </Button>
            </div>
          </Modal.Body>
        </Form>
      </Modal>

      {submitStatus && (
        <div className="mt-3">
          <strong>{submitStatus}</strong>
        </div>
      )}
    </Container>
  );
}
