import BackgroundImage from 'app/_components/BackgroundImage';
import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import { WhatWeLookForSection } from 'types/sectionsTypes';

import WhatWeLookForCards from './components/WhatWeLookForCards';

export default function WhatWeLookFor({ data }: { data: WhatWeLookForSection }) {
  const { title, cards, background } = data;

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
