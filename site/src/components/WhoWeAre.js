/* eslint-disable max-len */
import React from 'react';
import greyMatterWhoWeAreImage from '../img/greymatter-who-we-are-image.webp';

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are">
      <div className="container section who-we-are-section">
        <div />
        <h1 className="display-3 text-uppercase text-center section-title who-we-are-title">Who we are</h1>
        <div className="row gx-4 gy-5">
          <div className="col-12 col-lg-7">
            <p className="text-center text-lg-start who-we-are-text">
              Club of entrepreneurs, investors, legal experts and financial advisors willing to support the creation and growth of businesses within the new economy.
            </p>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center order-first order-lg-last">
            <img
              src={ greyMatterWhoWeAreImage }
              className="who-we-are-image"
              alt="Network of people"
            />
          </div>
        </div>
        <a className="btn" role="button" href="#what-we-look-for">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-64 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            className="text-primary arrow-down"
          >
            <path
              d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
