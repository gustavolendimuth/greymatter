import PropTypes from 'prop-types';
import React from 'react';
// Utils
import urlFor from '../../utils/urlFor';

export default function Img({ alt, image, width, height, quality = 90, format = 'webp', className }) {
  if (!image) {
    return null;
  }

  return (
    <img
      alt={alt}
      className={className}
      src={image && urlFor(image.asset).size(width > height ? width : height).quality(quality).format(format)
        .url()}
    />
  );
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  image: PropTypes.shape({
    asset: PropTypes.string,
  }).isRequired,
  quality: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
