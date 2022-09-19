import PropTypes from 'prop-types';
import React from 'react';

export default function ApplicationFormFileUpload({ transformToId, field }) {
  return (
    <label className="form-label" htmlFor={ transformToId(field.title) }>
      {field.title}
      <input className="form-control form-control-lg" type="file" id={ transformToId(field.title) } multiple />
    </label>
  );
}

ApplicationFormFileUpload.propTypes = {
  field: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  transformToId: PropTypes.func.isRequired,
};
