import Title from 'app/_components/Title';
import Link from 'next/link';
import { BlogSettings } from 'types/sectionsTypes';

import { BlogCategory } from '@/types/componentsTypes';

// import styles from './BlogHeader.module.css';

type Props = BlogSettings & {
  level: 1 | 2;
  locale: string;
  category: BlogCategory;
};

export default function BlogHeader({ title, level, locale, category }: Props) {
  switch (level) {
    case 1:
      return (
        <div className="flex flex-col">
          <Title className="text-secondary">{title}</Title>
          {/* <h4 className={`pt-5 text-center text-2xl text-secondary max-w-[1100px] ${styles.portableText}`}>
            <PortableText value={description} />
          </h4> */}
        </div>
      );

    case 2:
      return (
        <header>
          <h2 className="mx-auto mb-8 mt-8 max-w-4xl text-2xl font-bold  leading-tight tracking-tight text-primary md:text-4xl md:tracking-tighter">
            <Link href={`/${locale}/#${category}`} className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      );

    default:
      throw new Error(
        `Invalid level: ${JSON.stringify(level) || typeof level}, only 1 or 2 are allowed`
      );
  }
}
