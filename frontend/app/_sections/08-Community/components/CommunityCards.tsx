import Img from 'app/_components/Img';
import Link from 'next/link';
import { RxLinkedinLogo } from 'react-icons/rx';
import { CommunityMemberComponent } from 'types/componentsTypes';

type CommunityCardProps = {
  members: CommunityMemberComponent[];
};

export default function CommunityCards({ members }: CommunityCardProps) {
  return (
    <div className="flex w-[350px] flex-wrap justify-center gap-8 sm:w-auto">
      {members.map((member) => (
        <div
          key={member.name}
          className="flex h-[366px] w-[250px] flex-col items-center justify-center rounded-xl border-[4px] border-deep-blue bg-white p-5 shadow-xl"
          style={{
            background:
              'url("/assets/img/greymatter-what-we-look-for-background.webp") bottom / cover no-repeat',
          }}
        >
          <div className="flex flex-col items-center justify-between gap-3">
            <Img
              width={150}
              height={150}
              alt={member.image.alt}
              image={member.image}
              className={`max-h-[150px] rounded-full object-cover`}
            />
            <Link href={member?.linkedin || ''} target="_blank">
              <RxLinkedinLogo className="text-2xl text-white" />
            </Link>
            <p className="text-center text-xl font-600 leading-6 tracking-wider text-white ">
              {member.name}
            </p>
            <div className="flex items-center justify-center gap-1">
              <p className="text-md text-center tracking-wider text-white">
                {member.position}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
