import React from 'react';
import getYoutubeID from 'get-youtube-id';
import PropTypes from 'prop-types';

function YouTubePreview({ value }) {
  const id = getYoutubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}?controls=0&modestbranding=1`;

  if (!id) {
    return (
      <div>Preencha o endereço do vídeo do Youtube</div>
    );
  }

  return (
    <iframe
      width="100%"
      height="315px"
      src={ url }
      title="YouTube video player"
      frameBorder="0"
      allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Endereço',
    },
  ],
  components: {
    select: {
      url: 'url',
    },
    preview: YouTubePreview,
  },
};

YouTubePreview.propTypes = {
  value: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
