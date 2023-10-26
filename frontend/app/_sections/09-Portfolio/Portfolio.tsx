import './Portfolio.css';

import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';

import BackgroundImage from '@/app/_components/BackgroundImage';
import { getClient } from '@/lib/sanityClient';
import { getPortfolio } from '@/lib/sanityFetch';

import CategoryNavbar from './components/CategoryNavbar';
import PortfolioGrid from './components/PortfolioGrid';

export default async function Portfolio({ locale }: { locale: string }) {
  const client = getClient();
  const portfolio = await getPortfolio(client, locale);

  if (!portfolio) return null;

  return (
    <Section id="portfolio" className="bg-ternary">
      <BackgroundImage image={portfolio.background} />
      <Container fullHeight gap className=" lg:max-w-6xl">
        <div />
        <Title className="text-white">{portfolio.title}</Title>
        <div className="flex w-full flex-grow flex-col gap-calc-sm" id="portfolio-content">
          <CategoryNavbar companies={portfolio.companies} />
          <PortfolioGrid />
        </div>

        <DownArrow to="#insights" />
      </Container>
    </Section>
  );
}
