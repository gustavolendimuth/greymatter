import { PortableText } from '@portabletext/react';
import CoverImage from 'components/CoverImage';
import Date from 'components/PostDate';
import Link from 'next/link';
import type { Post } from 'types/sectionsTypes';
import dictionary from 'utils/dictionary';
import { getByLocale } from 'utils/getByLocale';

import AuthorAvatar from './AuthorAvatar';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  locale,
}: Omit<Post, '_id'> & { locale: string }) {
  if (!title || !excerpt) return null;
  const [titleByLocale, excerptByLocale] = getByLocale([title, excerpt], locale);
  if (!titleByLocale || !excerptByLocale) return null;

  return (
    <div className="bg-white rounded-xl flex flex-col justify-between border border-primary shadow-small transition-shadow duration-200 hover:shadow-medium">
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={titleByLocale}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className="px-7 pb-7 text-primary">
        <div className="pb-3 text-md text-primary">
          <Date dateString={date} />
        </div>

        <h3 className="pb-2 text-2xl font-600">
          {titleByLocale}
        </h3>
        {excerpt && <p className="text-lg text-primary"><PortableText value={excerptByLocale} /></p>}
        <div className="pb-7 pt-5">
          <Link href={`/posts/${slug}`} className="bg-primary text-white px-6 py-2 rounded-md">
            {dictionary[locale].readMore}
          </Link>
        </div>
        {author && <AuthorAvatar name={author.name} picture={author.picture} />}
      </div>
    </div>
  );
}
