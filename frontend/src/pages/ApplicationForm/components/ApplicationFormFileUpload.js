import PropTypes from 'prop-types';
import React from 'react';

export default function ApplicationFormFileUpload({ id, field }) {
  return (
    <label className="form-label" htmlFor={ id }>
      {field.title}
      <input className="form-control form-control-lg" type="file" id={ id } multiple />
    </label>
  );
}

ApplicationFormFileUpload.propTypes = {
  field: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
};
