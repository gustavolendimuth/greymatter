import Img from 'app/_components/Img';
import Link from 'next/link';
import { RxLinkedinLogo } from 'react-icons/rx';
import { TeamMemberComponent } from 'types/componentsTypes';
// Utils

interface TeamCardsProps {
  team: {
    members: TeamMemberComponent[];
  }
}

export default function TeamCards({ team }: TeamCardsProps) {
  if (!team) return null;

  return (
    <div className="flex flex-wrap gap-x-16 md:gap-x-20 lg:gap-x-24 gap-y-10 lg:gap-y-12 justify-center items-center pb-5">
      {
        team?.members.map((member) => (
          <div key={member.name} className=" justify-self-center flex flex-col items-center max-w-[220px]">
            <Link className="no-underline flex flex-col items-center" href={`/team-members/${member?.slug?.current}`}>
              <Img
                alt={member?.image.alt || 'Greymatter team member'}
                image={member?.image}
                format="webp"
                width={200}
                height={200}
                className="object-cover rounded-full"
              />
              <p
                data-tip="Profile"
                data-class="team-tooltip"
                className="text-2xl font-bold text-center pt-2 text-white"
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
              <div className="flex justify-center items-center gap-1">
                <Img
                  className="fill-white"
                  alt="Linkedin logo"
                  src="/assets/img/linkedin-icon.svg"
                  width={20}
                  height={20}
                />
                <span className="text-lg text-white flex gap-1 items-center">
                  <RxLinkedinLogo />
                  {member?.position}
                </span>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  );
}
