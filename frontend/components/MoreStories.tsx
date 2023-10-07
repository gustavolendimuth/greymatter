/* eslint-disable no-underscore-dangle */
import type { Post } from 'lib/sanity.queries';

import Stories from './Stories';

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <Stories posts={posts} />
    </section>
  );
}
