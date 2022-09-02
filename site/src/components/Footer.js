import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="flex-column bg-dark py-4 gap-3 pb-2">
      <div className="container d-flex flex-column pt-5 pb-4">
        <div className="row gx-4 gy-5 justify-content-center">
          <div
            className="col-12 col-lg-auto text-center text-lg-start d-flex flex-row justify-content-center align-items-baseline flex-wrap justify-content-sm-center flex-xl-column justify-content-xl-start gap-xl-4 gap-4"
          >
            <p className="fs-5 fw-normal text-light d-none d-md-block semi-bold link">Greymatter</p>
            <a className="link" href="/#who-we-are">Who we are</a>
            <a className="link" href="/#team">Team</a>
            <a className="link" href="/#community">Community</a>
            <a className="link" href="/#application">Application</a>
          </div>
          <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center">
            <div className="row gx-1 justify-content-center">
              <div className="col-auto col-xxl-auto text-center">
                <img src="assets/img/greymatter-logo-white.svg" width="113px" />
              </div>
              <div
                className="col-12 col-sm-auto text-center text-lg-start d-flex d-xxl-flex justify-content-center mt-auto"
              >
                <p className="fs-6 text-start text-light footer-vr1-logo-text">
                  Núcleo de Inovação, Transformação Digital &amp; Venture Capital do Vieira Rezende Advogados
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-auto d-flex d-xl-flex flex-column p-0">
            <div className="d-flex flex-column align-items-center gap-3">
              <p className="fs-6 footer-subscription-text" style={ { width: '100%' } }>
                Learn more about the Greymatter. Fill in your email and we will contact you soon.
              </p>
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
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <img
                className="p-5"
                src="assets/img/greymatter-logo-vieira-rezende.webp"
                width="320px"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-content-around flex-wrap gap-4 p-3">
          {/* <Link className="link" to="terms-and-conditions">Terms &amp; Conditions</Link> */}
          <a className="link" href="#">Privacy Policy</a>
          <a className="link" href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
