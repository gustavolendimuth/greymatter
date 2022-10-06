import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ArrowDown({ styles, to }) {
  return (
    <Link to={ to }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-64 0 512 512"
        className={ `arrow-down ${styles}` }
      >
        <path
          d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
        />
      </svg>
    </Link>
  );
}

ArrowDown.propTypes = {
  styles: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
