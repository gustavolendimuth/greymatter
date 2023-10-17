import IndexPage from 'components/IndexPage';
import { readToken } from 'lib/sanity.api';
import { getClient } from 'lib/sanityClient';
import { getAllPosts, getBlogSettings } from 'lib/sanityFetch';

export default async function Insights({ locale }) {
  const draftMode = false;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts = []] = await Promise.all([
    getBlogSettings(client, locale, 'insights'),
    getAllPosts(client, locale, 'insights'),
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
      category="insights"
    />
  );
}
