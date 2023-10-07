import { PortableText } from '@portabletext/react';
import Title from 'app/_components/Title';
import { Settings } from 'lib/sanity.queries';
import Link from 'next/link';

import styles from './BlogHeader.module.css';

type Props = Settings & {
  level: 1 | 2;
};

export default function BlogHeader({
  title,
  description,
  level,
}: Props) {
  switch (level) {
    case 1:
      return (
        <div className="flex flex-col">
          <Title className="text-secondary">
            {title}
          </Title>
          <h4
            className={`pt-5 text-center text-2xl text-secondary max-w-[1100px] ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4>
        </div>
      );

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      );

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      );
  }
}
