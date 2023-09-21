import PropTypes from 'prop-types';
import React from 'react';
// Utils
import urlFor from '../../utils/urlFor';

export default function Img({ alt, image, width, height, quality, format, className }) {
  if (!image) {
    return null;
  }

  return (
    <img
      alt={alt}
      className={className}
      src={urlFor(image?.asset).size(width > height ? width : height).quality(quality).format(format)
        .url()}
    />
  );
}

Img.defaultProps = {
  format: 'webp',
  quality: 90,
};

Img.propTypes = {
  alt: PropTypes.string,
  format: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
      _type: PropTypes.string,
    }),
  }),
  quality: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
}.isRequired;
