import Container from 'app/_components/Container';
import DownArrow from 'app/_components/DownArrow';
import Section from 'app/_components/Section';
import BlogHeader from 'components/BlogHeader';
import type { BlogSettings, Post } from 'types/sectionsTypes';

import AlertBanner from './AlertBanner';
import Stories from './Stories';

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: BlogSettings
  locale: string
}

export default function IndexPage(props: IndexPageProps) {
  const { preview = false, loading, posts, settings, locale } = props;
  const { title, description } = settings || {};

  return (
    <Section id="insights" className="bg-primary">
      <Container fullHeight gap justify>
        <div id="spacer" />
        <AlertBanner preview={preview} loading={loading} />
        <BlogHeader description={description} title={title} level={1} />
        <Stories posts={posts} locale={locale} />
        <DownArrow to="#application" />
      </Container>
    </Section>
  );
}
