import React, { useContext } from 'react';
import Context from '../../../context/Context';

export default function HomeModal() {
  const { languageId } = useContext(Context);
  const englishId = 'd3761ab6-c643-40b1-9233-00802f961ce6';

  const subtitleEn = 'REGULATORY ROADBLOCKS FOR INNOVATION & ENTREPRENEURSHIP IN BRAZIL';
  const subtitlePt = 'OBSTÁCULOS REGULATÓRIOS À INOVAÇÃO E AO EMPREENDEDORISMO NO BRASIL';
  const textEn = 'Suppose you are part of a project that faces regulatory roadblocks in Brazil. In that case, we ask you to respond to a brief questionnaire that aims to map the main barriers that restrict innovation development in the country. The filling should take 5 to 7 minutes.';
  const textPt = 'Se você participa de algum projeto que enfrente obstáculos regulatórios no Brasil, pedimos que responda a um breve questionário cujo objetivo é mapear as principais barreiras que restringem o desenvolvimento de inovação no País. O preenchimento deve levar de 5 a 7 minutos.';

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
              href="https://pt.surveymonkey.com/r/CPYTZ8N"
              rel="noreferrer"
            >
              { languageId === englishId ? 'Questionnaire' : 'Questionário' }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
