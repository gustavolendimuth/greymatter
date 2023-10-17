/* eslint-disable no-underscore-dangle */
import Meta from 'app/[locale]/Meta';
import { urlForImage } from 'lib/sanityImage';
import Head from 'next/head';
import { BlogSettings, Post } from 'types/sectionsTypes';

export interface PostPageHeadProps {
  settings: BlogSettings
  post: Post
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const { title } = settings;
  return (
    <Head>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <Meta />
      {post.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </Head>
  );
}
