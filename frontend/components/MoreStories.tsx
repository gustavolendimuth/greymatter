/* eslint-disable no-underscore-dangle */

import { Post } from 'types/sectionsTypes';
import dictionary from 'utils/dictionary';

import Stories from './Stories';

export default function MoreStories({ posts, locale, category }: { posts: Post[], locale: string, category: string }) {
  return (
    <section>
      <h2 className="mb-9 text-secondary text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
        {
          dictionary.moreStories[locale]
        }
      </h2>
      <Stories category={category} locale={locale} posts={posts} />
    </section>
  );
}
