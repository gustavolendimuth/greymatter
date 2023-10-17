import BackgroundImage from 'app/_components/BackgroundImage';
import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import { getClient } from 'lib/sanityClient';
import { getWhatWeLookFor } from 'lib/sanityFetch';

import WhatWeLookForCards from './components/WhatWeLookForCards';

export default async function WhatWeLookFor({ locale }: { locale: string }) {
  const client = getClient();
  const { title, cards, background } = await getWhatWeLookFor(client, locale);

  if (!title || !cards) return null;

  return (
    <Section id="what-we-look-for" className="relative">
      <BackgroundImage image={background} />
      <Container gap fullHeight justify>
        <div />
        <Title className=" text-white">{title}</Title>
        <WhatWeLookForCards cards={cards} />
        <div>
          <DownArrow to="#what-do-we-offer" />
        </div>
      </Container>
    </Section>
  );
}
