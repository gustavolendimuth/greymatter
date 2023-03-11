/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React from 'react';

export default function ApplicationFormTextareaInput({ field, id }) {
  return (
    <div className="col-12">
      <label className="form-label" htmlFor={ id }>
        {field.title}
        <textarea
          className="form-control form-control-lg application-form-fields"
          id={ id }
          required={ field.required }
          minLength={ field.required ? 3 : 0 }
          rows="4"
          spellCheck="true"
        />
      </label>
    </div>

  );
}

ApplicationFormTextareaInput.propTypes = {
  field: PropTypes.shape({
    _key: PropTypes.string,
    required: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
};
