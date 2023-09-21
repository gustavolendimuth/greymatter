/* eslint-disable react/forbid-prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Libraries
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
// Context
import Context from '../../../../context/Context';
// Utils
import fetchContent from '../../../../utils/fetchContent';
import urlFor from '../../../../utils/urlFor';
// Images
import greymatterButtonAction from '../../../assets/img/greymatter-button-action.svg';

export default function Application() {
  const { languageId, section } = useContext(Context);
  const [applicationPageTitle, setApplicationPageTitle] = useState();
  const [applicationImage, setApplicationImage] = useState();
  const [applicationText, setApplicationText] = useState();
  const [applicationButtonText, setApplicationButtonText] = useState();

  useEffect(() => {
    const getApplicationContent = async () => {
      const data = await fetchContent('application', languageId);
      if (data) {
        setApplicationPageTitle(data.title);
        setApplicationText(toHTML(data.text));
        setApplicationImage(data.image);
        setApplicationButtonText(data.buttonText);
      }
    };
    getApplicationContent();
  }, [languageId]);

  if (!applicationPageTitle || !applicationText) return null;

  return (
    <section ref={section.application} id="application" className="bg-primary">
      <div className="container section application-section">
        <div className="visible spacer" />
        <h1
          className="display-3 text-uppercase text-center text-light section-title"
        >
          {applicationPageTitle}
        </h1>
        <img
          alt={applicationImage?.alt}
          src={
            applicationImage && urlFor(applicationImage)
              .size(250)
              .quality(90)
              .url()
          }
          width={applicationImage?.width}
          height={applicationImage?.height}
        />
        <div className="text-center text-info">{applicationText && parse(applicationText)}</div>
        <Link
          className="btn btn-primary text-uppercase fw-normal bg-primary border rounded border-3 d-flex gap-2 application-btn"
          to="/application-form"
        >
          {applicationButtonText}
          <img
            alt="Action button"
            className="img-fluid"
            src={greymatterButtonAction}
            width="20px"
            height="20px"
          />
        </Link>
        <div className="visible spacer" />
      </div>
    </section>
  );
}
