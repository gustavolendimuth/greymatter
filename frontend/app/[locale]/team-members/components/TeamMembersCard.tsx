import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

import DownArrow from '@/app/_components/DownArrow';
import Img from '@/app/_components/Img';
import { TeamMemberComponent } from '@/types/componentsTypes';

type TeamMembersCardProps = {
  member: TeamMemberComponent;
  showArrowDown: boolean;
  index: number;
  nextMemberSlug: string;
  key: string;
};

export default function TeamMembersCard({
  member,
  showArrowDown,
  nextMemberSlug,
}: TeamMembersCardProps) {
  return (
    <div
      id={member.slug.current}
      className="flex min-h-calc-full flex-col items-center justify-center gap-16 pb-24 pt-32"
    >
      <div className="flex w-full flex-wrap justify-center">
        <div className="flex min-w-[328px] flex-col items-center gap-4 py-3 lg:w-1/3 lg:text-right">
          <Img
            className="max-w-[280px] rounded-full"
            image={member.image}
            alt={member.image.alt}
            width={250}
            height={250}
          />
          <div className="flex items-center gap-1 text-[1.5rem]">
            <FaLinkedin />
            <Link className="text-decoration-none flex items-center" href={member.linkedin || ''}>
              {member.position}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 lg:w-2/3">
          <h2 className="mb-5 mt-7 text-center text-5xl font-extrabold uppercase text-ternary lg:text-start">
            {member.name}
          </h2>
          <div className="flex max-w-2xl flex-col gap-4 text-lg text-ternary">
            {member.bio && <PortableText value={member.bio} />}
          </div>
        </div>
      </div>
      {showArrowDown && <DownArrow className="fill-primary" to={`#${nextMemberSlug}`} />}
    </div>
  );
}
