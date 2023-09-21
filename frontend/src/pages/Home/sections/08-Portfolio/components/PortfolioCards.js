import PropTypes from 'prop-types';
import React from 'react';

export default function PortfolioCards({ company: { logo } }) {
  const getFilterStyle = () => {
    if (logo.whiteBackground) return '';
    return logo.tone === 'dark' ? 'brightness(0.5)' : 'brightness(0.15)';
  };

  return (
    <div className="col flex-column portfolio-card d-flex justify-content-center align-content-center">
      <div
        style={{
          filter: `${getFilterStyle()} invert(1) grayscale(1)`,
          mixBlendMode: 'lighten',
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <img className="img-fluid portfolio-icon" src={logo.asset} alt={logo.alt} />
      </div>
    </div>
  );
}

PortfolioCards.propTypes = {
  company: PropTypes.shape({
    logo: PropTypes.shape({
      alt: PropTypes.string,
      whiteBackground: PropTypes.bool,
      tone: PropTypes.string,
      asset: PropTypes.string,
    }),
  }).isRequired,
};
