import Img from 'app/_components/Img';
import Link from 'next/link';
import { RxLinkedinLogo } from 'react-icons/rx';
import { CommunityMemberComponent } from 'types/componentsTypes';

type CommunityCardProps = {
  members: CommunityMemberComponent[];
};

export default function CommunityCards({ members }: CommunityCardProps) {
  return (
    <div className="flex flex-wrap gap-8 justify-center w-[350px] sm:w-auto">
      {
        members.map((member) => (
          <div
            // data-tooltip-content={positionByLocale}
            // data-tooltip-place="top"
            // data-tooltip-float={positionByLocale ? 'true' : undefined}
            key={member.name}
            className="flex flex-col justify-center items-center w-[250px] h-[366px] bg-white rounded-xl shadow-xl p-5 border-[4px] border-deep-blue"
            style={{
              background: 'url("/assets/img/greymatter-what-we-look-for-background.webp") bottom / cover no-repeat',
            }}
          >
            <div className="flex justify-between flex-col items-center gap-3">
              <Img
                width={150}
                height={150}
                alt={member.image.alt}
                image={member.image}
                className="object-cover rounded-full"
              />
              <Link href={member?.linkedin || ''} target="_blank">
                <RxLinkedinLogo className="text-white text-2xl" />
              </Link>
              <p className="text-xl font-600 text-center text-white tracking-wider leading-6 ">{member.name}</p>
              <div className="flex justify-center items-center gap-1">
                <p className="text-md text-white tracking-wider text-center">{member.position}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
