import IndexPage from 'components/IndexPage';
import { readToken } from 'lib/sanity.api';
import { getClient } from 'lib/sanityClient';
import { getAllPosts, getBlogSettings } from 'lib/sanityFetch';

export default async function News({ locale }) {
  const draftMode = false;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts = []] = await Promise.all([
    getBlogSettings(client, locale, 'news'),
    getAllPosts(client, locale, 'news'),
  ]);

  // if (draftMode) {
  //   return <PreviewIndexPage posts={posts} settings={settings} />;
  // }

  // if (!posts) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return (
    <IndexPage
      posts={posts}
      settings={settings}
      locale={locale}
      category="news"
    />
  );
}
