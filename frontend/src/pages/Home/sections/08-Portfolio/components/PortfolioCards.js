import PropTypes from 'prop-types';
import React from 'react';

export default function PortfolioCards({ company: { logo } }) {
  const getFilterStyle = () => {
    if (logo.whiteBackground) return '';
    return logo.tone === 'dark' ? 'brightness(0.45)' : 'brightness(0.15)';
  };

  return (
    <div className="col flex-column h-100 portfolio-card p-4 d-flex justify-content-center align-content-center">
      <div
        style={{
          filter: `${getFilterStyle()} invert(1) grayscale(1)`,
          mixBlendMode: 'lighten',
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <img className="img-fluid portfolio-icon" src={logo.asset} alt="logo" />
      </div>
    </div>
  );
}

PortfolioCards.propTypes = {
  company: PropTypes.shape({
    logo: PropTypes.shape({
      whiteBackground: PropTypes.bool,
      tone: PropTypes.string,
      asset: PropTypes.string,
    }),
  }).isRequired,
};
