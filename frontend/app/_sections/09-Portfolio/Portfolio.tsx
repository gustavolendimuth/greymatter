import './Portfolio.css';

import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import Title from 'app/_components/Title';

import CategoryNavbar from './components/CategoryNavbar';
import PortfolioGrid, { Company } from './components/PortfolioGrid';
import dataMock from './dataMock.json';

interface PortfolioData {
  title: string;
  companies: Company[];
}

export default function Portfolio({ locale }: { locale: string }) {
  const portfolio: PortfolioData = dataMock;

  if (!portfolio) return null;

  return (
    <Section id="portfolio" className="bg-ternary">
      {/* <BackgroundImage image={background} /> */}
      <Container fullHeight gap className="lg:max-w-[1320px]">
        <div />
        <Title className="text-white">{portfolio.title}</Title>
        <div className="flex-grow flex flex-col gap-calc-sm" id="portfolio-content">
          <CategoryNavbar companies={portfolio.companies} />
          <PortfolioGrid />
        </div>

        <DownArrow to="#insights" />
      </Container>
    </Section>
  );
}
