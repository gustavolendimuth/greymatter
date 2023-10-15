import Meta from 'app/[locale]/Meta';
import * as demo from 'lib/demo.data';
import { urlForImage } from 'lib/sanityImage';
import { Post, Settings } from 'lib/sanity.queries';
import Head from 'next/head';

export interface PostPageHeadProps {
  settings: Settings
  post: Post
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const title = settings.title ?? demo.title;
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
