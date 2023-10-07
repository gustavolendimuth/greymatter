import CoverImage from 'components/CoverImage';
import Date from 'components/PostDate';
import type { Post } from 'lib/sanity.queries';
import Link from 'next/link';

import AuthorAvatar from './AuthorAvatar';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className="bg-white rounded-xl flex flex-col justify-between border border-primary shadow-small transition-shadow duration-200 hover:shadow-medium">
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className="px-7 pb-7 text-primary">
        <div className="pb-3 text-md text-primary">
          <Date dateString={date} />
        </div>

        <h3 className="pb-2 text-2xl font-600">
          {title}
        </h3>
        {excerpt && <p className="text-lg text-primary">{excerpt}</p>}
        <div className="pb-7 pt-5">
          <Link href={`/posts/${slug}`} className="bg-primary text-white px-6 py-2 rounded-md">
            Read More
          </Link>
        </div>
        {author && <AuthorAvatar name={author.name} picture={author.picture} />}
      </div>
    </div>
  );
}
