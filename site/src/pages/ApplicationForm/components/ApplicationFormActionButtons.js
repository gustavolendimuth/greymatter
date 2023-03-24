import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeContext from '../../../context/Context';
import buttonAction from '../../assets/img/greymatter-button-action.svg';

export default function ApplicationFormActionButtons() {
  const { languageId } = useContext(HomeContext);
  const englishId = 'd3761ab6-c643-40b1-9233-00802f961ce6';

  return (
    <div id="actionButtons" className="row d-flex justify-content-center gx-5 gy-4 pt-5">
      <div className="col-12 col-md-auto">
        <Link
          className="btn btn-greymatter-primary"
          to="/"
        >
          {languageId === englishId ? 'Cancel' : 'Cancelar'}
        </Link>
      </div>
      <div className="col-12 col-md-auto">
        <button
          className="btn d-flex justify-content-center align-items-center justify-content-sm-center align-items-xxl-center btn-greymatter-primary"
          type="submit"
        >
          {languageId === englishId ? 'Send' : 'Enviar'}
          <img
            alt="Alt"
            className="img-fluid"
            src={ buttonAction }
            width="20px"
            height="20px"
          />
        </button>
      </div>
    </div>
  );
}
