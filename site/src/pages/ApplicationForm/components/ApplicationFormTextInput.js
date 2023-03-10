/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React from 'react';

export default function ApplicationFormTextInput({ field, transformToId }) {
  const columnClass = (size) => {
    let className = 'col-12';
    if (size === 3) {
      className = 'col-12 col-md-4';
    } else if (size === 2) {
      className = 'col-12 col-md-6';
    }
    return className;
  };

  return (
    <div className={ columnClass(field.columnSize) }>
      <label
        className="col-form-label form-label"
        htmlFor={ field.value === 'cnpj' ? 'cnpj' : transformToId(field.title) }
      >
        {field.title}
        <input
          className="form-control form-control-lg application-form-fields"
          type={ field.value === 'number' ? 'number' : 'text' }
          id={ field.value === 'cnpj' ? 'cnpj' : transformToId(field.title) }
          required={ field.required }
          minLength={ field.required && 3 }
          placeholder={ field.value === 'cnpj' ? '00.000.000/0000-00' : null }
          spellCheck="true"
        />
      </label>
    </div>
  );
}

ApplicationFormTextInput.propTypes = {
  field: PropTypes.shape({
    _key: PropTypes.string,
    columnSize: PropTypes.number,
    required: PropTypes.bool,
    title: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  transformToId: PropTypes.func.isRequired,
};
