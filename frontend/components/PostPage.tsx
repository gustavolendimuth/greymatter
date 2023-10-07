import Container from 'components/BlogContainer';
import Layout from 'components/BlogLayout';
import MoreStories from 'components/MoreStories';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';
import PostPageHead from 'components/PostPageHead';
import PostTitle from 'components/PostTitle';
import SectionSeparator from 'components/SectionSeparator';
import type { Post, Settings } from 'lib/sanity.queries';
import { notFound } from 'next/navigation';

import BlogHeader from './BlogHeader';

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = [];

export default function PostPage(props: PostPageProps) {
  const { preview = false, loading, morePosts = NO_POSTS, post, settings } = props;
  const { title } = settings || {};

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  console.log(post);
  return (

    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={2} />
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
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}