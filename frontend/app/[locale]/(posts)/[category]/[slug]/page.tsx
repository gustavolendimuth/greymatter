import Container from 'app/_components/Container';
import Navbar from 'app/_components/Navbar';
import Section from 'app/_components/Section';
import PostPage from 'components/PostPage';
import { readToken } from 'lib/sanity.api';
import { getClient } from 'lib/sanityClient';
import { getBlogSettings, getPostAndMoreStories } from 'lib/sanityFetch';
import type { SharedPageProps } from 'pages/_app';
import { BlogSettings, Post } from 'types/sectionsTypes';

interface PageProps extends SharedPageProps {
  post: Post
  morePosts: Post[]
  settings?: BlogSettings,
  params: {
    slug: string,
    locale: string,
    category: 'news' | 'insights',
  }
}

export const revalidate = 60;

export default async function ProjectSlugRoute(props: PageProps) {
  const { draftMode = false, params: { slug, category, locale } } = props;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  if (!slug || !category || !locale) {
    return {
      notFound: true,
    };
  }

  const [settings, { post, morePosts }] = await Promise.all([
    getBlogSettings(client, locale, category),
    getPostAndMoreStories(client, slug, locale, category),
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
        <Container className="pt-10 pb-14">
          <PostPage
            post={post}
            morePosts={morePosts}
            settings={settings}
            locale={locale}
            category={category}
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
