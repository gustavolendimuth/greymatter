import Avatar from 'components/AuthorAvatar';
import CoverImage from 'components/CoverImage';
import Date from 'components/PostDate';
import PostTitle from 'components/PostTitle';
import { Post } from 'types/sectionsTypes';

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug' | 'category'> & { locale: string },
) {
  const { title, coverImage, date, author, slug, category, locale } = props;

  return (
    <div className="max-w-4xl mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-12">
        <CoverImage locale={locale} category={category} title={title || ''} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 max-w-3xl mx-auto italic text-secondary font-600 text-md">
          <Date dateString={date} />
        </div>
      </div>
    </div>
  );
}
