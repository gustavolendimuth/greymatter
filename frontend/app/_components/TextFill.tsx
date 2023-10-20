/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { PortableText } from '@portabletext/react';
// import $ from 'jquery';
import React, { useEffect, useRef } from 'react';
import { TypedObject } from 'types/propertiesTypes';
import textFill from 'utils/textFill';

type IntroTextProps = {
  text: TypedObject | string;
  fontSize: number;
  lineHeight: number;
  height: number;
  width: number;
};

export default function TextFill({ text, fontSize, lineHeight, height, width }: IntroTextProps) {
  const textRef = useRef(null);

  function onPageshow() {
    textFill({ textRef, fontSize, lineHeight, height, width });
  }

  window.onpageshow = onPageshow;
  window.onresize = onPageshow;

  useEffect(() => {
    onPageshow();
  }, []);

  return (
    <div ref={textRef} className={`h-[${height}px] lg:w-[${width}px] w-auto`}>
      {text && (typeof text === 'object' ? <PortableText value={text} /> : <p>{text}</p>)}
    </div>
  );
}
