import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import BlogHeader from 'components/BlogHeader';
import { BlogCategory } from 'types/componentsTypes';
import type { BlogSettings, Post } from 'types/sectionsTypes';

import AlertBanner from './AlertBanner';
import Stories from './Stories';

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: BlogSettings;
  locale: string;
  category: BlogCategory;
}

export default function IndexPage(props: IndexPageProps) {
  const { preview = false, loading, posts, settings, locale, category } = props;
  const { title, description } = settings || {};

  return (
    <Section id={category} className={category === 'insights' ? 'bg-primary' : 'bg-white'}>
      <Container fullHeight gap justify>
        <div id="spacer" />
        <AlertBanner preview={preview} loading={loading} />
        <BlogHeader category={category} locale={locale} description={description} title={title} level={1} />
        <Stories posts={posts} locale={locale} category={category} />
        <DownArrow className={`${category === 'news' ? 'fill-primary' : ''}`} to={`#${category === 'insights' ? 'news' : 'application'}`} />
      </Container>
    </Section>
  );
}
