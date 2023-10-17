import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react';
import { TypedObject } from '@portabletext/types';

import styles from './PostBody.module.css';
import { SanityImage } from './SanityImage';

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => <SanityImage {...value} />,
  },
};

export default function PostBody({ content }: { content: TypedObject }) {
  return (
    <div className={`mx-auto max-w-3xl ${styles.portableText}`}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  );
}
