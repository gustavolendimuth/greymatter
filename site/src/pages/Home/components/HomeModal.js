import React, { useContext } from 'react';
import Context from '../../../context/Context';
import report from '../../assets/pdf/Report-Pesquisa-Grey-Matter-02-mai-2023(5440426.1).pdf';

export default function HomeModal() {
  const { languageId } = useContext(Context);
  const englishId = 'd3761ab6-c643-40b1-9233-00802f961ce6';

  const subtitleEn = 'REGULATORY ROADBLOCKS FOR INNOVATION & ENTREPRENEURSHIP IN BRAZIL';
  const subtitlePt = 'OBSTÁCULOS REGULATÓRIOS À INOVAÇÃO E AO EMPREENDEDORISMO NO BRASIL';
  const textEn = 'Here is the report of the research we conducted with projects facing regulatory obstacles in Brazil. Our purpose is to build an advocacy agenda to enable innovative projects with potential to transform Brazil.';
  const textPt = 'Confira o report da pesquisa que realizamos com projetos que enfrentam obstáculos regulatórios no Brasil. Nosso objetivo é construir uma pauta de advocacy para viabilizar projetos inovadores com potencial transformador para o País.';

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body px-5 py-4">
            <h2 className="text-center pb-2 text-secondary">
              { languageId === englishId ? 'RESEARCH' : 'PESQUISA'}
            </h2>
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
          <div className="modal-footer d-flex justify-content-center gap-4">
            <button type="button" className="btn btn-secondary btn-secondary-modal" data-bs-dismiss="modal">
              { languageId === englishId ? 'Close' : 'Fechar' }
            </button>
            <a
              role="button"
              target="_blank"
              className="btn btn-primary btn-primary-modal"
              href={ report }
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
