/* eslint-disable sonarjs/no-identical-expressions */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toHTML } from '@portabletext/to-html';
import parse from 'html-react-parser';
import { FaLinkedinIn, FaInstagram, FaGripLinesVertical } from 'react-icons/fa';
import fetchContent from '../utils/fetchContent';
import HomeContext from '../context/Context';
import urlFor from '../utils/urlFor';
import greymatterLogoVieiraRezende from '../img/greymatter-logo-vieira-rezende.webp';

export default function Footer() {
  const { languageId } = useContext(HomeContext);
  const englishId = 'd3761ab6-c643-40b1-9233-00802f961ce6';

  // const [background, setBackground] = useState();
  const [formButton, setFormButton] = useState();
  const [formText, setFormText] = useState();
  const [logo, setLogo] = useState();

  useEffect(() => {
    const getContent = async () => {
      const data = await fetchContent('footer', languageId);
      if (data) {
        // setBackground(data.background);
        setFormButton(data.formButton);
        setFormText(toHTML(data.formText));
        setLogo(data.logo);
      }
    };
    getContent();
  }, [languageId]);

  return (
    <footer className="flex-column bg-dark py-4 gap-3 pb-2">
      <div className="container d-flex flex-column pt-5 pb-4">
        <div className="row gx-4 gy-5 justify-content-center">
          <div
            className="col-12 col-lg-auto text-center text-lg-start d-flex flex-row justify-content-center align-items-baseline flex-wrap justify-content-sm-center flex-xl-column justify-content-xl-start gap-xl-4 gap-4"
          >
            <p className="fs-5 fw-normal text-light d-none d-md-block semi-bold">Grey Matter</p>
            <Link className="link" to="/who-we-are">{languageId === englishId ? 'Who we are' : 'Quem somos'}</Link>
            <Link className="link" to="/team">{languageId === englishId ? 'Team' : 'Equipe'}</Link>
            <Link className="link" to="/community">{languageId === englishId ? 'Community' : 'Comunidade'}</Link>
            <Link className="link" to="/application">{languageId === englishId ? 'Application' : 'Fale conosco'}</Link>
          </div>
          <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center">
            <div className="row pb-5">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <img alt={ logo?.alt } src={ logo && urlFor(logo.image.asset).url() } width="400px" />
              </div>
              <div className="col-12 d-flex gap-4 justify-content-center align-items-center">
                <a
                  className="d-flex align-items-center"
                  href="https://www.linkedin.com/company/grey-matter-tech/?viewAsMember=true"
                >
                  <FaLinkedinIn className="footer-linkedin-icon" />
                </a>
                <FaGripLinesVertical className="footer-linkedin-icon" />
                <a
                  className="d-flex align-items-center"
                  href="https://www.instagram.com/greymatter.tech/?igshid=YmMyMTA2M2Y%3D"
                >
                  <FaInstagram className="footer-linkedin-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-auto d-flex d-xl-flex flex-column p-0">
            <div className="d-flex flex-column align-items-center gap-3">
              <div className="fs-6 footer-subscription-text" style={ { width: '100%' } }>
                {formText && parse(formText)}
              </div>
              <form
                className="d-flex gap-3 footer-sebscribe-form footer-subscribe-form"
                style={ { maxWidth: '700px' } }
                data-bss-recipient="da84bfb6ef47d75ff81142daef2547c2"
              >
                <div className="row gx-2 gy-3 justify-content-center" style={ { width: '100%' } }>
                  <div className="col-auto d-xxl-flex">
                    <input
                      className="form-control footer-email-input"
                      type="email"
                      name="subscribe"
                      placeholder="email"
                      inputMode="email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary text-uppercase" type="submit" style={ { background: 'var(--bs-primary)' } }>
                      {formButton && formButton}
                    </button>
                  </div>
                </div>
              </form>
              <img
                alt="Vieira Rezende logo"
                className="p-5"
                src={ greymatterLogoVieiraRezende }
                width="320px"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-content-around flex-wrap gap-4 p-3">
          <a className="link" href="#terms-and-conditions">{languageId === englishId ? 'Terms & Conditions' : 'Termos & Condições'}</a>
          <a className="link" href="#privacy-policy">{languageId === englishId ? 'Privacy Policy' : 'Política de Privacidade'}</a>
          <a className="link" href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
