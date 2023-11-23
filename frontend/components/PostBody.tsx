import { PortableText, type PortableTextReactComponents } from '@portabletext/react';
import { TypedObject } from '@portabletext/types';
import React from 'react'; // Import React
import { HiExternalLink } from 'react-icons/hi';

import { VideoPreview } from '@/schemas/components/VideoPreview';

import styles from './PostBody.module.css';
import { SanityImage } from './SanityImage';

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => <SanityImage {...value} />,
    video: ({ value }: { value: { url: string } }) => {
      return <VideoPreview actions={{ props: { value: { url: value.url } } }} />;
    },
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: { href: string } }) => {
      return (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline no-underline"
        >
          {children}
          <HiExternalLink className="inline" />
        </a>
      );
    },
  },
};

export default function PostBody({ content }: { content: TypedObject }) {
  return (
    <div className={`mx-auto max-w-3xl ${styles.portableText}`}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  );
}
