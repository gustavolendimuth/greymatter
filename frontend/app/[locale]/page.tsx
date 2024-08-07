import Navbar from 'app/_components/Navbar';
import Hero from 'app/_sections/01-Hero/Hero';
import Intro from 'app/_sections/02-Intro/Intro';
import { WhoWeAre } from 'app/_sections/03-WhoWeAre/WhoWeAre';
import WhatWeLookFor from 'app/_sections/04-WhatWeLookFor/WhatWeLookFor';
import WhatDoWeOffer from 'app/_sections/05-WhatDoWeOffer/WhatDoWeOffer';
import HowWeInvest from 'app/_sections/06-HowWeInvest/HowWeInvest';
import Team from 'app/_sections/07-Team/Team';
import Community from 'app/_sections/08-Community/Community';
import Portfolio from 'app/_sections/09-Portfolio/Portfolio';
import Insights from 'app/_sections/10-Insights/Insights';
import News from 'app/_sections/11-News/News';
import Application from 'app/_sections/12-Application/Application';
import { getClient } from 'lib/sanityClient';
import {
  getAllPosts,
  getApplication,
  getBlogSettings,
  getCommunity,
  getHowWeInvest,
  getIntro,
  getPortfolio,
  getTeam,
  getWhatDoWeOffer,
  getWhatWeLookFor,
  getWhoWeAre,
} from 'lib/sanityFetch';

export const revalidate = 0;

type IndexProps = {
  params: {
    locale: string;
  };
};

export default async function Index({ params: { locale } }: IndexProps) {
  const client = getClient();
  const [
    intro,
    whoWeAre,
    whatWeLookFor,
    whatDoWeOffer,
    howWeInvest,
    team,
    community,
    portfolio,
    insightsSettings,
    newsSettings,
    insights,
    news,
    application,
  ] = await Promise.all([
    getIntro(client, locale),
    getWhoWeAre(client, locale),
    getWhatWeLookFor(client, locale),
    getWhatDoWeOffer(client, locale),
    getHowWeInvest(client, locale),
    getTeam(client, locale),
    getCommunity(client, locale),
    getPortfolio(client, locale),
    getBlogSettings(client, locale, 'insights'),
    getBlogSettings(client, locale, 'news'),
    getAllPosts(client, locale, 'insights'),
    getAllPosts(client, locale, 'news'),
    getApplication(client, locale),
  ]);
  return (
    <>
      <header>
        <Navbar position="absolute" locale={locale} />
      </header>
      <main>
        <Hero locale={locale} />
        <Intro data={intro} />
        <WhoWeAre data={whoWeAre} />
        <WhatWeLookFor data={whatWeLookFor} />
        <WhatDoWeOffer data={whatDoWeOffer} />
        <HowWeInvest data={howWeInvest} />
        <Team data={team} locale={locale} />
        <Community data={community} />
        <Portfolio data={portfolio} />
        <Insights locale={locale} posts={insights} settings={insightsSettings} />
        <News locale={locale} posts={news} settings={newsSettings} />
        <Application data={application} />
      </main>
    </>
  );
}
