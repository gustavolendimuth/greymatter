import IndexPage from 'components/IndexPage';
import { readToken } from 'lib/sanity.api';
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client';
import getValuesByLanguage from 'utils/getValuesByLanguage';

export default async function Insights({ locale }) {
  const draftMode = false;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
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
      posts={posts.map((post) => getValuesByLanguage(post, locale))}
      settings={getValuesByLanguage(settings, locale)}
    />
  );
}
