import './Portfolio.css';

import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';

import BackgroundImage from '@/app/_components/BackgroundImage';
import { PortfolioSection } from '@/types/sectionsTypes';

import CategoryNavbar from './components/CategoryNavbar';
import PortfolioGrid from './components/PortfolioGrid';

export default function Portfolio({ data }: { data: PortfolioSection }) {
  const { background, companies, title } = data;

  if (!data) return null;

  return (
    <Section id="portfolio" className="bg-ternary">
      <BackgroundImage image={background} />
      <Container fullHeight gap className=" lg:max-w-6xl">
        <div />
        <Title className="text-white">{title}</Title>
        <div className="flex w-full flex-grow flex-col gap-calc-sm" id="portfolio-content">
          <CategoryNavbar companies={companies} />
          <PortfolioGrid />
        </div>

        <DownArrow to="#insights" />
      </Container>
    </Section>
  );
}
