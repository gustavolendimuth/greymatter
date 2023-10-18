import IndexPage from 'components/IndexPage';
import { BlogSettings, Post } from 'types/sectionsTypes';

type PageProps = {
    locale: string,
    settings: BlogSettings,
    posts: Post[],
}

export default function Insights({ locale, posts, settings }: PageProps) {

  return (
    <IndexPage
      posts={posts}
      settings={settings}
      locale={locale}
      category="insights"
    />
  );
}
