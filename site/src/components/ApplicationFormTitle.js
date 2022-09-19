/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React from 'react';

export default function ApplicationFormTitle({ field }) {
  return (
    <div key={ field._key } className="col-12">
      <h2
        className="display-6 text-uppercase fw-bold application-form-subtitle"
      >
        {field.title && field.title}
      </h2>
    </div>
  );
}

ApplicationFormTitle.propTypes = {
  field: PropTypes.shape({
    _key: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
