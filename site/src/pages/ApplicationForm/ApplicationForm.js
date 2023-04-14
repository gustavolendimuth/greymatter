/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from 'react';
// Dependencies
import camelCase from 'camelcase';
import parse from 'html-react-parser';
import { extract, words, numbers } from 'words-n-numbers';
import stringRemove from 'string-remove';
import { toHTML } from '@portabletext/to-html';
// Context
import Context from '../../context/Context';
// Components
import ApplicationFormTextInput from './components/ApplicationFormTextInput';
import ApplicationFormTextareaInput from './components/ApplicationFormTextareaInput';
import ApplicationFormFileUpload from './components/ApplicationFormFileUpload';
import ApplicationFormTitle from './components/ApplicationFormTitle';
import ApplicationFormActionButtons from './components/ApplicationFormActionButtons';
// Utils
import fetchContent from '../../utils/fetchContent';
// Styles
import './ApplicationForm.css';

export default function ApplicationForm() {
  const {
    setNavbarConfig,
    languageId,
  } = useContext(Context);

  const [applicationFormPageTitle, setApplicationFormPageTitle] = useState();
  const [applicationFormText, setApplicationFormText] = useState();
  // const [applicationFormBackground, setApplicationFormBackground] = useState();
  const [applicationFormFields, setApplicationFormFields] = useState();

  $(document).ready(() => {
    $('#cnpj').mask('00.000.000/0000-00');
  });

  const fieldTitleToId = (string) => {
    let result = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    result = stringRemove(result, ["'"]);
    result = extract(result, { regex: [words, numbers], toLowercase: true });
    return camelCase(result.slice(0, 3));
  };

  const fields = {
    title: (field) => (
      <ApplicationFormTitle
        key={ field._key }
        field={ field }
      />
    ),
    text: (field) => (
      <ApplicationFormTextInput
        key={ field._key }
        field={ field }
        id={ fieldTitleToId(field.title) }
      />
    ),
    upload: (field) => (
      <ApplicationFormFileUpload
        key={ field._key }
        field={ field }
        id={ fieldTitleToId(field.title) }
      />
    ),
    textarea: (field) => (
      <ApplicationFormTextareaInput
        key={ field._key }
        field={ field }
        id={ fieldTitleToId(field.title) }
      />
    ),
  };

  useEffect(() => {
    setNavbarConfig({ background: false, position: 'absolute' });
  }, []);

  useEffect(() => {
    const getApplicationFormContent = async () => {
      const data = await fetchContent('applicationForm', languageId);
      console.log(data);
      if (data) {
        setApplicationFormPageTitle(data.title);
        setApplicationFormText(toHTML(data.text));
        // setApplicationFormBackground(data.background);
        setApplicationFormFields(data.formFields);
      }
    };
    getApplicationFormContent();
  }, [languageId]);

  if (!applicationFormPageTitle || !applicationFormFields) return null;

  return (
    <div className="d-flex flex-column gap-5">
      <header className="d-flex flex-column justify-content-between gap-5 application-header">
        <div />
        <div className="container-sm d-flex flex-column application-container gap-5">
          <h1 className="display-3 text-uppercase text-center text-light section-title">
            { applicationFormPageTitle}
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
                  applicationFormFields.map((field) => fields[field.type](field))
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
