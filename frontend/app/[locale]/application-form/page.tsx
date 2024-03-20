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
import Modal from '@/app/_components/Modal';
import Navbar from '@/app/_components/Navbar';
import Title from '@/app/_components/Title';
import { useHomeContext } from '@/context/Provider';
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
  const [showModal, setShowModal] = useState(false);
  const { setLoading } = useHomeContext();
  const [modalContent, setModalContent] = useState('');
  const client = getClient();
  const formRef = useRef(null);
  const [applicationForm, setApplicationForm] = useState<ApplicationFormSection>();
  const NEXT_PUBLIC_SEND_EMAIL_URL = process.env.NEXT_PUBLIC_SEND_EMAIL_URL;

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(1);

    const formInfo = {
      from: 'Application Form',
      to: 'felipe@greymatter.online',
      subject: 'Application Form submission',
    };

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fileInputs = Array.from(form.querySelectorAll('input[type="file"].attachments')) || [];

    const attachmentsPromises = fileInputs.map(async (input: Element) => {
      const files = Array.from((input as HTMLInputElement).files || []);
      return Promise.all(
        files.map(async (file: File) => {
          const dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });

          const base64String = (dataUrl as string).split(',')[1];

          return {
            content: base64String,
            filename: file.name,
            encoding: 'base64',
          };
        })
      );
    });

    const attachments = (await Promise.all(attachmentsPromises)).flat();

    console.log('attachments', JSON.stringify(attachments));

    const data = Array.from(formData.entries())
      .map(([key, value]) => {
        const label = form.querySelector(`label[for="${key}"]`);
        const title = label ? label.textContent : key;
        return `<h3>${title}</h3><p>${value}</p>`;
      })
      .join('');

    const emailBody = { ...formInfo, data, attachments };

    const response = await fetch(NEXT_PUBLIC_SEND_EMAIL_URL ?? '', {
      method: 'POST',
      body: JSON.stringify(emailBody),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
    });

    setLoading(-1);

    if (response.ok) {
      setModalContent('Form submitted successfully');
      setShowModal(true);
      (formRef.current as HTMLFormElement | null)?.reset();
    } else {
      setModalContent('Form submission failed. Please try again later.');
      setShowModal(true);
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
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <div className="flex h-full flex-col items-center justify-center">
          <p className="text-center text-2xl">{modalContent}</p>
          <button
            onClick={() => setShowModal(false)}
            className="bold mt-5 rounded-md bg-primary px-10 py-3  text-white"
          >
            Close
          </button>
        </div>
      </Modal>
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
