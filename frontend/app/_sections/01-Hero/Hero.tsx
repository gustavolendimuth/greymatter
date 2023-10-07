'use client';

import Container from 'app/_components/Container';
import Section from 'app/_components/Section';
import { useHomeContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { HeroPage } from 'types/componentsTypes';

import fetchContent from '../../../utils/fetchContent';
import DownArrow from '../../_components/DownArrow';

interface HeroBackgroundVideo {
  landscapeVideo: string;
  portraitVideo: string;
}

export default function Hero() {
  const [heroBackgroundVideo, setHeroBackgroundVideo] = useState<HeroBackgroundVideo>();
  const [isPortrait, setIsPortrait] = useState<boolean>(
    // window.matchMedia('(orientation: portrait)').matches,
    false,
  );
  const { languageId } = useHomeContext();

  useEffect(() => {
    const getHeroContent = async () => {
      const data = (await fetchContent('hero')) as HeroPage;
      if (data) {
        setHeroBackgroundVideo(data.backgroundVideo);
      }
    };
    getHeroContent();
  }, [languageId]);

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
    (heroBackgroundVideo?.landscapeVideo && !isPortrait)
    || (heroBackgroundVideo?.portraitVideo && isPortrait)
  ) {
    return (
      <Section>
        <Container fullHeight justify>
          <div />
          <video
            className="w-full h-full object-fill absolute top-0 z-[-1]"
            src={
              isPortrait
                ? heroBackgroundVideo.portraitVideo
                : heroBackgroundVideo.landscapeVideo
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
