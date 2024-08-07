import BackgroundImage from 'app/_components/BackgroundImage';
import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';
import { WhatDoWeOfferSection } from 'types/sectionsTypes';

import WhatDoWeOfferCards from './components/WhatDoWeOfferCard';

export function WhatDoWeOffer({ data }: { data: WhatDoWeOfferSection }) {
  const { title, background, cards } = data;

  if (!title || !cards) return null;

  return (
    <Section className="relative" id="what-do-we-offer">
      <BackgroundImage image={background} />
      <Container fullHeight gap justify>
        <div className="spacer" />
        <Title className="text-primary">{title}</Title>
        <WhatDoWeOfferCards cards={cards} />
        <DownArrow className="fill-primary" to="#how-we-invest" />
      </Container>
    </Section>
  );
}

export default WhatDoWeOffer;
