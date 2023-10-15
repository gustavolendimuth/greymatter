/* eslint-disable no-underscore-dangle */
import cn from 'classnames';
import { urlForImage } from 'lib/sanityImage';
import Image from 'next/image';
import Link from 'next/link';

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className="h-[147px] w-full object-cover rounded-t-xl"
        width={1300}
        height={900}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(900).width(1320).url()}
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
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
