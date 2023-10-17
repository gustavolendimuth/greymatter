import Hero from 'app/_sections/01-Hero/Hero';
import Intro from 'app/_sections/02-Intro/Intro';
import WhoWeAre from 'app/_sections/03-WhoWeAre/WhoWeAre';
import WhatWeLookFor from 'app/_sections/04-WhatWeLookFor/WhatWeLookFor';
import WhatDoWeOffer from 'app/_sections/05-WhatDoWeOffer/WhatDoWeOffer';
import HowWeInvest from 'app/_sections/06-HowWeInvest/HowWeInvest';
import Team from 'app/_sections/07-Team/Team';
import Community from 'app/_sections/08-Community/Community';
import Portfolio from 'app/_sections/09-Portfolio/Portfolio';
import Insights from 'app/_sections/10-Insights/Insights';
import News from 'app/_sections/11-News/News';
import Application from 'app/_sections/12-Application/Application';
import React from 'react';

import Layout from './Layout';

type HomeProps = {
  locale: string;
};

export default function Home({ locale }: HomeProps) {
  return (
    <Layout locale={locale}>
      <Hero locale={locale} />
      <Intro locale={locale} />
      <WhoWeAre locale={locale} />
      <WhatWeLookFor locale={locale} />
      <WhatDoWeOffer locale={locale} />
      <HowWeInvest locale={locale} />
      <Team locale={locale} />
      <Community locale={locale} />
      <Portfolio locale={locale} />
      <Insights locale={locale} />
      <News locale={locale} />
      <Application locale={locale} />
    </Layout>
  );
}
