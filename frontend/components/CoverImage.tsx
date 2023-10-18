/* eslint-disable no-underscore-dangle */
import cn from 'classnames';
import { urlForImage } from 'lib/sanityImage';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean,
  thumbnail?: boolean,
  category: string
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority, thumbnail, category } = props;
  const thumbnailClasses = 'h-[147px] w-full rounded-t-xl';
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className={twMerge('h-[420px] w-full object-cover', thumbnail && thumbnailClasses)}
        width={946}
        height={420}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(420).width(946).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div className="flex justify-center items-center bg-gray-300 rounded-t-xl h-[147px]">
      <Image width={200} height={100} alt="Grey Matter Logo" src="/assets/img/greymatter-logo.png" className="cover" />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/${category}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
