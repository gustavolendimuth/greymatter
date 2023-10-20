// TeamMembers.tsx
import { notFound } from 'next/navigation';

import Navbar from '@/app/_components/Navbar';
import { getClient } from '@/lib/sanityClient';
import { getTeam } from '@/lib/sanityFetch';

import TeamMembersCard from './components/TeamMembersCard';

type TeamMembersProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export default async function TeamMembers({ params: { locale } }: TeamMembersProps) {
  const client = getClient();
  const {
    team: { members },
  } = await getTeam(client, locale);

  if (!members) {
    notFound();
  }

  return (
    <>
      <Navbar locale={locale} background position="fixed" />
      <main className="bg-[url('/assets/img/greymatter-team-members-background.webp')] bg-contain bg-fixed bg-top bg-no-repeat">
        <section className="container mx-auto max-w-5xl px-5 xl:px-0">
          {members?.map((member, index) => (
            <TeamMembersCard
              key={member._id}
              showArrowDown={members.length - 1 !== index}
              member={member}
              index={index}
              locale={locale}
              nextMemberSlug={members[index + 1]?.slug.current}
            />
          ))}
        </section>
      </main>
    </>
  );
}
