import Img from 'app/_components/Img';
import Link from 'next/link';
import { RxLinkedinLogo } from 'react-icons/rx';
import { TeamMemberComponent } from 'types/componentsTypes';
// Utils

interface TeamCardsProps {
  team: {
    members: TeamMemberComponent[];
  };
  locale: string;
}

export default function TeamCards({ team, locale }: TeamCardsProps) {
  if (!team) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 pb-5 md:gap-x-20 lg:gap-x-24 lg:gap-y-12">
      {team?.members.map((member) => (
        <div
          key={member.name}
          className="flex max-w-[220px] flex-col items-center justify-self-center"
        >
          <Link
            className="flex flex-col items-center no-underline"
            href={`/${locale}/team-members#${member?.slug?.current}`}
          >
            <Img
              alt={member?.image.alt || 'Greymatter team member'}
              image={member?.image}
              format="webp"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
            <p
              data-tip="Profile"
              data-class="team-tooltip"
              className="pt-2 text-center text-2xl font-bold text-white"
            >
              {member?.name}
            </p>
          </Link>
          <Link
            className="no-underline"
            href={member?.linkedin || ''}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center gap-1">
              <Img
                className="fill-white"
                alt="Linkedin logo"
                src="/assets/img/linkedin-icon.svg"
                width={20}
                height={20}
              />
              <span className="flex items-center gap-1 text-lg text-white">
                <RxLinkedinLogo />
                {member?.position}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
