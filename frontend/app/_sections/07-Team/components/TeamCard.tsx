import Img from 'app/_components/Img';
import Link from 'next/link';
import { RxLinkedinLogo } from 'react-icons/rx';
import { TeamMemberComponent } from 'types/componentsTypes';
// Utils

interface TeamCardProps {
  member: TeamMemberComponent;
}

export default function TeamCard({
  member: { alt, name, photoLg, position, linkedin, slug },
}: TeamCardProps) {
  return (
    // <div className="flex flex-col items-center max-w-[220px]">
    <div className=" justify-self-center flex flex-col items-center max-w-[220px]">
      <Link className="no-underline flex flex-col items-center" href={`/team-members/${slug?.current}`}>
        <Img
          alt={alt || 'Greymatter team member'}
          image={photoLg}
          format="webp"
          width={200}
          height={200}
          size={[250, 250]}
          className="object-cover rounded-full"
        />
        <p
          data-tip="Profile"
          data-class="team-tooltip"
          className="text-2xl font-bold text-center pt-2 text-white"
        >
          {name}
        </p>
      </Link>
      <Link
        className="no-underline"
        href={linkedin || ''}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex justify-center items-center gap-1">
          <Img
            className="fill-white"
            alt="Linkedin logo"
            src="/assets/img/linkedin-icon.svg"
            width={20}
          />
          <span className="text-lg text-white flex gap-1 items-center">
            <RxLinkedinLogo />
            {position}
          </span>
        </div>
      </Link>
    </div>
  );
}
