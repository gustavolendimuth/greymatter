/* eslint-disable no-underscore-dangle */
import React from 'react';
import { BlogCategory } from 'types/componentsTypes';
import { Post } from 'types/sectionsTypes';

import PostPreview from './PostPreview';

export default function Stories({
  posts = [],
  locale,
  category,
}: {
  posts: Post[];
  locale: string;
  category: BlogCategory;
}) {
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
          locale={locale}
          category={category}
        />
      ))}
    </div>
  );
}
