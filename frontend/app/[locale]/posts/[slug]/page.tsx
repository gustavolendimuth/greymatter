import Container from 'app/_components/Container';
import Navbar from 'app/_components/Navbar';
import Section from 'app/_components/Section';
import PostPage from 'components/PostPage';
import { readToken } from 'lib/sanity.api';
import {
  getClient,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanityClient';
import { Post, Settings } from 'lib/sanity.queries';
import type { SharedPageProps } from 'pages/_app';
import getValuesByLanguage from 'utils/getByLocale';

interface PageProps extends SharedPageProps {
  post: Post
  morePosts: Post[]
  settings?: Settings,
  params?: {
    slug: string,
    locale: string,
  }
}

export default async function ProjectSlugRoute(props: PageProps) {
  const { draftMode = false, params } = props;
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const locale = params?.locale || 'en';

  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const [settings, { post, morePosts }] = await Promise.all([
    getSettings(client),
    getPostAndMoreStories(client, params?.slug),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // if (draftMode) {
  //   return (
  //     <PreviewPostPage post={post} morePosts={morePosts} settings={settings} />
  //   );
  // }

  return (
    <>
      <Navbar position="static" background locale={locale} />
      <Section>
        <Container className="pt-10 pb-32">
          <PostPage
            post={getValuesByLanguage(post, locale)}
            morePosts={morePosts.map((morePost) => getValuesByLanguage(morePost, locale))}
            settings={getValuesByLanguage(settings, locale)}
          />
        </Container>
      </Section>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const slugs = await getAllPostsSlugs();

//   return {
//     paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
//     fallback: 'blocking',
//   };
// };
