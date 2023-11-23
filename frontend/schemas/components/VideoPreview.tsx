/* eslint-disable @next/next/no-sync-scripts */
import getVideoId from 'get-video-id';
import React from 'react';

interface VideoPreviewProps {
  actions: {
    props: {
      value: {
        url: string;
      };
    };
  };
}

export function VideoPreview({
  actions: {
    props: { value },
  },
}: VideoPreviewProps) {
  let site: string | null = null;
  let url: string | null = null;

  if (value?.url) {
    const { id, service } = getVideoId(value?.url);
    site = service;
    if (service === 'vimeo') {
      url = `https://player.vimeo.com/video/${id}?h=343212dc82&autoplay=1&loop=1&title=0&byline=0&portrait=0`;
      console.log('pegou url');
    } else if (service === 'youtube') {
      url = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
    }
  }

  if (!site || !url) {
    return <div>Preencha com um endereço de Youtube ou Vimeo válido</div>;
  }

  return site === 'vimeo' ? (
    <div>
      <iframe
        title="Vimeo video player"
        src={url}
        style={{ width: '100%', aspectRatio: '16/9' }}
        frameBorder="0"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
      />
      <script src="https://player.vimeo.com/api/player.js" />
    </div>
  ) : (
    <iframe
      style={{ width: '100%', aspectRatio: '16/9' }}
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
