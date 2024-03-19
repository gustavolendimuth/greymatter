/* eslint-disable react-hooks/exhaustive-deps */
'use client';
// Styles

import '../../assets/styles/ApplicationForm.css';
import 'jquery-mask-plugin';

import { PortableText } from '@portabletext/react';
// Dependencies
import camelCase from 'camelcase';
import $ from 'jquery';
import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import stringRemove from 'string-remove';
// @ts-ignore
import { extract, numbers, words } from 'words-n-numbers';

import BackgroundImage from '@/app/_components/BackgroundImage';
import Container from '@/app/_components/Container';
import Navbar from '@/app/_components/Navbar';
import Title from '@/app/_components/Title';
import { getClient } from '@/lib/sanityClient';
import { getApplicationForm } from '@/lib/sanityFetch';
import { ApplicationFormFields, ApplicationFormSection } from '@/types/sectionsTypes';

// Utils
import ApplicationFormActionButtons from './components/ApplicationFormActionButtons';
import ApplicationFormFileUpload from './components/ApplicationFormFileUpload';
import ApplicationFormTextareaInput from './components/ApplicationFormTextareaInput';
// Components
import ApplicationFormTextInput from './components/ApplicationFormTextInput';
import ApplicationFormTitle from './components/ApplicationFormTitle';

type ApplicationFormProps = {
  params: {
    locale: string;
  };
};

export default function ApplicationForm({ params: { locale } }: ApplicationFormProps) {
  const client = getClient();
  const [applicationForm, setApplicationForm] = useState<ApplicationFormSection>();
  useEffect(() => {
    const getFormFields = async (client: any, locale: string) => {
      const result = await getApplicationForm(client, locale);
      setApplicationForm(result);
    };
    getFormFields(client, locale);
  }, [locale]);

  $(() => {
    $('#cnpj').mask('00.000.000/0000-00');
  });

  const formRef = useRef(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const formData = new FormData(formRef.current!);

    console.log('Form data:', formData);

    const response = await fetch('https://sendemail.greymatter.technology/api/send', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Handle successful response
    } else {
      // Handle error
    }
  };

  const fieldTitleToId = (string: string): string => {
    let result = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    result = stringRemove(result, ["'"]);
    result = extract(result, { regex: [words, numbers], toLowercase: true });
    return camelCase(result.slice(0, 3));
  };

  type FieldsType = {
    title: (field: ApplicationFormFields) => JSX.Element;
    text: (field: ApplicationFormFields) => JSX.Element;
    upload: (field: ApplicationFormFields) => JSX.Element;
    textarea: (field: ApplicationFormFields) => JSX.Element;
  };

  const fields: FieldsType = {
    title: (field) => <ApplicationFormTitle key={field._key} field={field} />,
    text: (field) => (
      <ApplicationFormTextInput key={field._key} field={field} id={fieldTitleToId(field.title)} />
    ),
    upload: (field) => (
      <ApplicationFormFileUpload key={field._key} field={field} id={fieldTitleToId(field.title)} />
    ),
    textarea: (field) => (
      <ApplicationFormTextareaInput
        key={field._key}
        field={field}
        id={fieldTitleToId(field.title)}
      />
    ),
  };

  return (
    <>
      <BackgroundImage image={applicationForm?.background} />
      <Navbar position="static" locale={locale} />
      <Container className="max-w-screen-lg">
        <div className="flex flex-col gap-5">
          <header className="flex flex-col justify-between gap-5 py-52">
            <div />
            <Title className="text-center text-white">
              {applicationForm?.title && applicationForm.title}
            </Title>
            <div className="flex content-center justify-center text-center text-xl leading-9 text-ternary md:text-2xl md:text-secondary lg:text-left">
              {applicationForm?.text && <PortableText value={applicationForm.text} />}
            </div>
            <div />
          </header>
          <main className="container mx-auto pb-5">
            <section>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-3 gap-5 py-5"
                id="application-form"
              >
                {applicationForm?.formFields.map((field) =>
                  fields[field.type as keyof FieldsType](field)
                )}
                <ApplicationFormActionButtons locale={locale} />
              </form>
            </section>
          </main>
        </div>
      </Container>
    </>
  );
}
