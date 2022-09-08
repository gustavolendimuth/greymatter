/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { toHTML } from '@portabletext/to-html';
import React, { useContext, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import HomeContext from '../context/HomeContext';
import greymatterButtonAction from '../img/greymatter-button-action.svg';
import sanityClient from '../services/sanityClient';
import urlFor from '../services/urlFor';

export default function Application({ application }) {
  const { languageId } = useContext(HomeContext);
  const [applicationPageTitle, setApplicationPageTitle] = useState();
  const [applicationImage, setApplicationImage] = useState();
  const [applicationText, setApplicationText] = useState();
  const [applicationButtonText, setApplicationButtonText] = useState();

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "application" 
          && language._ref == "${languageId}" 
          && preview.isPreview == false] | order(_createdAt asc)[0] {
        pageTitle,
        text,
        image,
        buttonText,
      }`,
    ).then((data) => {
      if (data) {
        setApplicationPageTitle(data.pageTitle);
        setApplicationText(toHTML(data.text));
        setApplicationImage(data.image);
        setApplicationButtonText(data.buttonText);
      }
    })
      .catch((e) => console.error(e));
  }, [languageId]);

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
          src={ applicationImage && urlFor(applicationImage.imageLg.asset).url() }
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
