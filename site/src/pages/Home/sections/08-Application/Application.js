/* eslint-disable react/forbid-prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { toHTML } from '@portabletext/to-html';
// Context
import Context from '../../../../context/Context';
// Utils
import urlFor from '../../../../utils/urlFor';
import fetchContent from '../../../../utils/fetchContent';
// Images
import greymatterButtonAction from '../../../../img/greymatter-button-action.svg';

export default function Application({ application }) {
  const { languageId } = useContext(Context);
  const [applicationPageTitle, setApplicationPageTitle] = useState();
  const [applicationImage, setApplicationImage] = useState();
  const [applicationText, setApplicationText] = useState();
  const [applicationButtonText, setApplicationButtonText] = useState();

  useEffect(() => {
    const getApplicationContent = async () => {
      const data = await fetchContent('application', languageId);
      if (data) {
        setApplicationPageTitle(data.pageTitle);
        setApplicationText(toHTML(data.text));
        setApplicationImage(data.image);
        setApplicationButtonText(data.buttonText);
      }
    };
    getApplicationContent();
  }, [languageId]);

  if (!application || !applicationPageTitle || !applicationText) return null;

  return (
    <section ref={ application } id="application" className="bg-primary">
      <div className="container section application-section">
        <div className="visible spacer" />
        <h1
          className="display-3 text-uppercase text-center text-light section-title"
        >
          {applicationPageTitle}
        </h1>
        <img
          alt={ applicationImage?.alt }
          src={ applicationImage && urlFor(applicationImage).url() }
          width={ applicationImage?.width }
          height={ applicationImage?.height }
        />
        <div className="text-center text-info">{ applicationText && parse(applicationText) }</div>
        <Link
          className="btn btn-primary text-uppercase fw-normal bg-primary border rounded border-3 d-flex gap-2 application-btn"
          to="/application-form"
        >
          { applicationButtonText }
          <img
            alt="Action button"
            className="img-fluid"
            src={ greymatterButtonAction }
            width="20px"
            height="20px"
          />
        </Link>
        <div className="visible spacer" />
      </div>
    </section>
  );
}

Application.propTypes = {
  application: PropTypes.any.isRequired,
};
