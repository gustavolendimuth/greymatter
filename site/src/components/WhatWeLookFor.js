import React from 'react';

import WhatWeLookForIconEarlyStages from '../img/greymatter-what-we-look-for-icon-early-stages.svg';
import whatWeLookForIconInnovativeProjects from '../img/greymatter-what-we-look-for-icon-innovative-projects.svg';
import whatWeLookForIconVisionaryFounders from '../img/greymatter-what-we-look-for-icon-visionary-founders.svg';

export default function WhatWeLookFor() {
  return (
    <section id="what-we-look-for" className="what-we-look-for-section">
      <div className="container section gap-2">
        <div className="visible spacer" />
        <h1
          className="display-3 text-nowrap text-uppercase text-center text-light section-title what-we-look-for-title"
        >
          What we look for
        </h1>
        <div
          className="row gx-3 gy-3 gx-lg-5 gy-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center align-items-stretch"
        >
          <div className="col flex-column section-container">
            <div
              className="d-flex flex-column justify-content-evenly align-items-center gap-2 gap-lg-4 py-3 px-5 p-lg-4 what-we-look-for-card"
              data-bss-disabled-mobile="true"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="d-flex justify-content-center align-items-center who-we-are-div-icon">
                <img
                  className="img-fluid pulse animated who-we-are-icon"
                  src={ whatWeLookForIconInnovativeProjects }
                  loading="auto"
                  alt="Innovative projects"
                />
              </div>
              <p className="text-center text-light card-text">
                Innovative projects facing regulatory and legal
                challenges

              </p>
            </div>
          </div>
          <div className="col flex-column section-container">
            <div
              className="d-flex flex-column justify-content-evenly align-items-center gap-2 gap-lg-4 py-3 px-5 p-lg-4 what-we-look-for-card"
              data-bss-disabled-mobile="true"
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-delay="1200"
            >
              <div className="d-flex justify-content-center align-items-center who-we-are-div-icon">
                <img
                  className="img-fluid who-we-are-icon"
                  src={ whatWeLookForIconVisionaryFounders }
                  loading="auto"
                  alt="Visionary founders"
                />
              </div>
              <p className="text-center text-light card-text">
                Visionary founders with a clear plan to succeed
              </p>
            </div>
          </div>
          <div className="col flex-column section-container">
            <div
              className="d-flex flex-column justify-content-evenly align-items-center gap-2 gap-lg-4 py-3 px-5 p-lg-4 what-we-look-for-card"
              data-bss-disabled-mobile="true"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="2000"
              style={ { height: '100%' } }
            >
              <div className="d-flex justify-content-center align-items-center who-we-are-div-icon">
                <img
                  className="img-fluid who-we-are-icon"
                  src={ WhatWeLookForIconEarlyStages }
                  loading="auto"
                  alt="What we look for"
                />
              </div>
              <p className="text-center text-light card-text">Early stage to Series A, sector agnostic</p>
            </div>
          </div>
        </div>
        <a className="btn" role="button" href="#what-do-we-offer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-64 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            className="text-light arrow-down"
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
