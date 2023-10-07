import { urlForImage } from 'lib/sanity.image';
import type { Author } from 'lib/sanity.queries';
import Image from 'next/image';
import { AiOutlineUser } from 'react-icons/ai';

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props;
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <div className="rounded-full  bg-gray-200 w-[48px] h-[48px]">

          { picture?.asset?._ref ? (

            <Image
              src={urlForImage(picture).height(96).width(96).fit('crop')
                .url()}
              className="rounded-full bg-gray-200"
              height={96}
              width={96}
              alt={picture?.alt ?? name}
            />
          ) : (
            <div className="rounded-full bg-gray-200 w-[48px] h-[48px] flex justify-center items-center text-3xl object-cover"><AiOutlineUser /></div>
          )}
        </div>
      </div>
      <div className="text-lg font-600">{name}</div>
    </div>
  );
}
