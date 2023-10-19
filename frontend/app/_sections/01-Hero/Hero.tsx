/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import { getClient } from 'lib/sanityClient';
import { getHero } from 'lib/sanityFetch';
import { useEffect, useState } from 'react';
import { HeroVideo } from 'types/sectionsTypes';

export default function Hero({ locale }: { locale: string }) {
  const [heroVideo, setHeroVideo] = useState<HeroVideo>();
  const [isPortrait, setIsPortrait] = useState<boolean>(false);
  const client = getClient();

  useEffect(() => {
    const getHeroContent = async () => {
      const { video } = await getHero(client, locale);
      if (video) {
        setHeroVideo(video);
      }
    };
    getHeroContent();
  }, []);

  useEffect(() => {
    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setIsPortrait(e.matches);
    };

    const mql = window.matchMedia('(orientation: portrait)');
    mql.addEventListener('change', handleOrientationChange);

    return () => {
      mql.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  if (
    (heroVideo?.landscape && !isPortrait)
    || (heroVideo?.portrait && isPortrait)
  ) {
    return (
      <Section>
        <Container fullHeight justify>
          <div />
          <video
            className="w-full h-full object-fill absolute top-0 z-[-1]"
            src={
              isPortrait
                ? heroVideo.portrait
                : heroVideo.landscape
            }
            autoPlay
            loop
            muted
          />
          <DownArrow styles="fill-white" to="#intro" />
        </Container>
      </Section>
    );
  }

  return null;
}
