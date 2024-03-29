import React from 'react';
import getVideoId from 'get-video-id';
import PropTypes from 'prop-types';

function VideoPreview({ actions: { props: { value } } }) {
  let site;
  let url = '';
  console.log('value', value);

  if (value?.url) {
    const { id, service } = getVideoId(value?.url);
    site = service;
    if (service === 'vimeo') {
      url = `https://player.vimeo.com/video/${id}?h=343212dc82&autoplay=1&loop=1&title=0&byline=0&portrait=0`;
      console.log('pegou url');
    } else if (service === 'youtube') {
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

export default {
  name: 'video',
  type: 'object',
  title: 'Vídeo',
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
    preview: VideoPreview,
  },
};

VideoPreview.propTypes = {
  actions: PropTypes.shape({
    props: PropTypes.shape({
      value: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};
