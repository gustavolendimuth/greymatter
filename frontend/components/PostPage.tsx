import Container from 'components/BlogContainer';
import Layout from 'components/BlogLayout';
import MoreStories from 'components/MoreStories';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import PostTitle from 'components/PostTitle';
import SectionSeparator from 'components/SectionSeparator';
import { notFound } from 'next/navigation';
import { BlogCategory } from 'types/componentsTypes';
import { BlogSettings, Post } from 'types/sectionsTypes';

import BlogHeader from './BlogHeader';

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  morePosts: Post[];
  settings: BlogSettings;
  locale: string;
  category: BlogCategory;
}

const NO_POSTS: Post[] = [];

export default function PostPage(props: PostPageProps) {
  const { preview = false, loading, morePosts = NO_POSTS, post, settings, locale, category } = props;
  const { title, description } = settings || {};

  const slug = post?.slug;

  if ((!slug && !preview) || !post || !post.content) {
    notFound();
  }

  return (
    <>
      {/* <PostPageHead settings={settings} post={post} /> */}

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader category={category} locale={locale} description={description} title={title} level={2} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  category={category}
                  locale={locale}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories category={category} locale={locale} posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
