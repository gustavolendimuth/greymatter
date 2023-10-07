import Img from 'app/_components/Img';
import Link from 'next/link';
import { RxLinkedinLogo } from 'react-icons/rx';
import { CommunityMemberComponent } from 'types/componentsTypes';

interface CommunityCardProps {
  member: CommunityMemberComponent;
}

export default function CommunityCard({
  member: { alt, name, photoLg, position, linkedin },
}: CommunityCardProps) {
  return (
    // @ts-ignore
    <div
      data-tooltip-content={position}
      data-tooltip-place="top"
      data-tooltip-float={position ? 'true' : undefined}
      className="flex flex-col justify-center items-center w-[250px] h-[366px] bg-white rounded-xl shadow-xl p-5 border-[4px] border-deep-blue"
      style={{
        background: 'url("/assets/img/greymatter-what-we-look-for-background.webp") bottom / cover no-repeat',
      }}
    >
      <div className="flex justify-between flex-col items-center gap-3">
        <Img size={[200, 200]} width={150} alt={alt || ''} image={photoLg || ''} className="object-cover rounded-full" />
        <Link href={linkedin} target="_blank">
          <RxLinkedinLogo className="text-white text-2xl" />
        </Link>
        <p className="text-xl font-600 text-center text-white tracking-wider leading-6 ">{name}</p>
        <div className="flex justify-center items-center gap-1">
          <p className="text-md text-white tracking-wider text-center">{position}</p>
        </div>
      </div>
    </div>
  );
}
