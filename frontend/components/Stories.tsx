/* eslint-disable no-underscore-dangle */

'use client';

import { Post } from 'lib/sanity.queries';
import React from 'react';

import PostPreview from './PostPreview';

export default function Stories({ posts = [] }: { posts: Post[] }) {
  return (
    <div className="max-w-[1320px] grid grid-cols-1 gap-y-7 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7">
      {posts?.map((post) => (
        <PostPreview
          key={post._id}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
}
