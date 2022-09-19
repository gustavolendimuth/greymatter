/* eslint-disable no-else-return */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
/* eslint-disable sonarjs/no-identical-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines */
import React, { useContext, useEffect, useState } from 'react';
import camelCase from 'camelcase';
import parse from 'html-react-parser';
import stringRemove from 'string-remove';
import { extract, words, numbers } from 'words-n-numbers';
import { toHTML } from '@portabletext/to-html';
import HomeContext from '../context/HomeContext';
import sanityClient from '../services/sanityClient';
import ApplicationFormTextInput from '../components/ApplicationFormTextInput';
import ApplicationFormTextareaInput from '../components/ApplicationFormTextareaInput';
import ApplicationFormFileUpload from '../components/ApplicationFormFileUpload';
import ApplicationFormTitle from '../components/ApplicationFormTitle';
import ApplicationFormActionButtons from '../components/ApplicationFormActionButtons';

export default function ApplicationForm() {
  const {
    setNavbarConfig,
    languageId,
  } = useContext(HomeContext);

  const [applicationFormPageTitle, setApplicationFormPageTitle] = useState();
  const [applicationFormText, setApplicationFormText] = useState();
  // const [applicationFormBackground, setApplicationFormBackground] = useState();
  const [applicationFormFields, setApplicationFormFields] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavbarConfig({ background: false, position: 'absolute' });
  }, []);

  useEffect(() => {
    if (languageId) {
      sanityClient.fetch(
        `*[_type == "applicationForm"
          && language._ref == "${languageId}" 
          && preview.isPreview == false] | order(_createdAt asc)[0] {
        pageTitle,
        text,
        background,
        formFields,
      }`,
      ).then((data) => {
        if (data) {
          setApplicationFormPageTitle(data.pageTitle);
          setApplicationFormText(toHTML(data.text));
          // setApplicationFormBackground(data.background);
          setApplicationFormFields(data.formFields);
        }
      })
        .catch((e) => console.error(e));
    }
  }, [languageId]);

  const transformToId = (string) => {
    let result = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    result = stringRemove(result, ["'"]);
    result = extract(result, { regex: [words, numbers], toLowercase: true });
    return camelCase(result.slice(0, 3));
  };

  $(document).ready(() => {
    $('#cnpj').mask('00.000.000/0000-00');
  });

  return (
    <div className="d-flex flex-column gap-5">
      <header className="d-flex flex-column justify-content-between gap-5 application-header">
        <div />
        <div className="container-sm d-flex flex-column application-container gap-5">
          <h1 className="display-3 text-uppercase text-center text-light section-title">
            {applicationFormPageTitle && applicationFormPageTitle}
          </h1>
          <div className="text-info application-text">
            {applicationFormText && parse(applicationFormText)}
          </div>
        </div>
        <div />
      </header>
      <main className="application-main pb-5">
        <div className="container-sm application-form-container">
          <section>
            <form
              className="d-flex flex-column gap-3"
              id="application-form"
              data-bss-recipient="da84bfb6ef47d75ff81142daef2547c2"
            >
              <div className="row gy-2">
                {
                  applicationFormFields
                && applicationFormFields.map((field) => {
                  if (field.type === 'title') {
                    return <ApplicationFormTitle key={ field._key } field={ field } />;
                  } else if (field.type === 'text') {
                    return <ApplicationFormTextInput key={ field._key } transformToId={ transformToId } field={ field } />;
                  } else if (field.type === 'textarea') {
                    return <ApplicationFormTextareaInput key={ field._key } transformToId={ transformToId } field={ field } />;
                  } else if (field.type === 'upload') {
                    return <ApplicationFormFileUpload key={ field._key } transformToId={ transformToId } field={ field } />;
                  }
                  return null;
                })
                }
                <ApplicationFormActionButtons />
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
