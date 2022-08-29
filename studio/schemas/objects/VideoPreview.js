import React from 'react';
import getVideoId from 'get-video-id';
import PropTypes from 'prop-types';

function VideoPreview({ value }) {
  let site;
  let url = '';

  if (value.url) {
    const { id, service } = getVideoId(value.url);
    site = service;
    if (site === 'vimeo') {
      url = `https://player.vimeo.com/video/${id}?h=343212dc82&autoplay=1&loop=1&title=0&byline=0&portrait=0`;
    } else if (site === 'youtube') {
      url = `https://www.youtube.com/embed/${id}?controls=0&modestbranding=1`;
    }
  }

  if (!site) {
    return (
      <div>Preencha com um endereço de Youtube ou Vimeo válido</div>
    );
  }

  return (
    site === 'vimeo'
      ? (
        <div style={ { padding: '56.25% 0 0 0', position: 'relative' } }>
          <iframe
            title="Vimeo video player"
            src={ url }
            style={ { position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%' } }
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
          />
          <script src="https://player.vimeo.com/api/player.js" />
        </div>
      ) : (
        <iframe
          width="100%"
          height="315px"
          src={ url }
          title="YouTube video player"
          frameBorder="0"
          allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
  );
}

export default VideoPreview;

VideoPreview.propTypes = {
  value: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
