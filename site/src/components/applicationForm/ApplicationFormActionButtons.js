import React from 'react';
import { Link } from 'react-router-dom';
import buttonAction from '../../img/greymatter-button-action.svg';

export default function ApplicationFormActionButtons() {
  return (
    <div id="actionButtons" className="row d-flex justify-content-center gx-5 gy-4 pt-5">
      <div className="col-12 col-md-auto">
        <Link className="btn btn-greymatter-primary" to="/">Cancel</Link>
      </div>
      <div className="col-12 col-md-auto">
        <button
          className="btn d-flex justify-content-center align-items-center justify-content-sm-center align-items-xxl-center btn-greymatter-primary"
          type="submit"
        >
          send
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
