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
import buttonAction from '../img/greymatter-button-action.svg';
import sanityClient from '../services/sanityClient';

export default function ApplicationForm() {
  const {
    setNavbarConfig,
    languageId,
  } = useContext(HomeContext);

  const transformToId = (string) => {
    let result = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    result = stringRemove(result, ["'"]);
    result = extract(result, { regex: [words, numbers], toLowercase: true });
    return camelCase(result.slice(0, 3));
  };

  $(document).ready(() => {
    $('#cnpj').mask('00.000.000/0000-00');
  });

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
                    return (
                      <div key={ field._key } className="col-12">
                        <h2
                          className="display-6 text-uppercase fw-bold application-form-subtitle"
                        >
                          {field.title && field.title}
                        </h2>
                      </div>
                    );
                  }
                  if (field.type === 'text') {
                    let columnClass = 'col-12';
                    if (field.columnSize === 3) {
                      columnClass = 'col-12 col-md-4';
                    } else if (field.columnSize === 2) {
                      columnClass = 'col-12 col-md-6';
                    }
                    return (
                      <div key={ field._key } className={ columnClass }>
                        <label
                          className="col-form-label form-label"
                          htmlFor={ field.value === 'cnpj' ? 'cnpj' : transformToId(field.title) }
                        >
                          {field.title}
                          <input
                            className="form-control form-control-lg application-form-fields"
                            type={ field.value === 'number' ? 'number' : 'text' }
                            id={ field.value === 'cnpj' ? 'cnpj' : transformToId(field.title) }
                            required={ field.required }
                            minLength={ field.required && 3 }
                            placeholder={ field.value === 'cnpj' ? '00.000.000/0000-00' : null }
                            spellCheck="true"
                          />
                        </label>
                      </div>
                    );
                  }
                  if (field.type === 'textarea') {
                    return (
                      <div key={ field._key } className="col-12">
                        <label className="form-label" htmlFor={ transformToId(field.title) }>
                          {field.title}
                          <textarea
                            className="form-control form-control-lg application-form-fields"
                            id={ transformToId(field.title) }
                            required={ field.required }
                            minLength={ field.required ? 3 : 0 }
                            rows="4"
                            spellCheck="true"
                          />
                        </label>
                      </div>
                    );
                  }
                  return null;
                })
                }
                <div className="row d-flex justify-content-center gx-5 gy-4 pt-5">
                  <div className="col-12 col-md-auto">
                    <a className="btn btn-greymatter-primary" role="button" href="https://greymatter.technology">Cancel</a>
                  </div>
                  <div className="col-12 col-md-auto">
                    <button
                      className="btn d-flex justify-content-center align-items-center justify-content-sm-center align-items-xxl-center btn-greymatter-primary"
                      type="submit"
                    >
                      send
                      <img
                        alt="Alt"
                        className="img-fluid"
                        src={ buttonAction }
                        width="20px"
                        height="20px"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
