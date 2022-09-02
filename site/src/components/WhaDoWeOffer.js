import React from 'react';
import iconNetworking from '../img/greymatter-what-do-we-offer-icon-networking.svg';
import iconStrategicAdvise from '../img/greymatter-what-do-we-offer-icon-strategic-advise.svg';
import iconLegalAdvise from '../img/greymatter-what-do-we-offer-icon-legal-advise.svg';
import iconAdvocacy from '../img/greymatter-what-do-we-offer-icon-advocacy.svg';
import iconFunding from '../img/greymatter-what-do-we-offer-icon-funding.svg';

export default function WhaDoWeOffer() {
  return (
    <section id="what-do-we-offer">
      <div className="container section wha-do-we-offer-section">
        <div className="visible spacer" />
        <h1 className="display-3 text-uppercase text-center section-title">What do we offer?</h1>
        <div className="row gx-2 gy-2 gx-lg-5 gy-lg-5 row-cols-2 row-cols-md-3 d-flex justify-content-center flex-wrap">
          <div className="col">
            <div
              className="d-flex flex-column justify-content-around align-items-center py-3 px-2 gap-2 what-do-we-offer-card"
              data-bss-disabled-mobile="true"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img
                alt="Alt"
                className="wha-do-we-offer-card-icon"
                src={ iconStrategicAdvise }
              />
              <p className="what-do-we-offer-card-text">Strategic Advice</p>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex flex-column justify-content-evenly align-items-center p-3 gap-2 what-do-we-offer-card"
              data-bss-disabled-mobile="true"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <img
                alt="Alt"
                className="wha-do-we-offer-card-icon"
                src={ iconNetworking }
              />
              <p className="what-do-we-offer-card-text">Networking</p>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex flex-column justify-content-around align-items-center p-3 gap-2 what-do-we-offer-card"
              data-bss-disabled-mobile="true"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <img
                alt="Alt"
                className="wha-do-we-offer-card-icon"
                src={ iconLegalAdvise }
              />
              <p className="what-do-we-offer-card-text">Legal Advice</p>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex flex-column justify-content-around align-items-center p-3 gap-2 what-do-we-offer-card"
              data-bss-disabled-mobile="true"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="1500"
            >
              <img
                alt="Alt"
                className="wha-do-we-offer-card-icon"
                src={ iconAdvocacy }
              />
              <p className="what-do-we-offer-card-text">Advocacy</p>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex flex-column justify-content-around align-items-center p-3 gap-2 what-do-we-offer-card"
              data-bss-disabled-mobile="true"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="2000"
            >
              <img
                className="wha-do-we-offer-card-icon"
                src={ iconFunding }
                alt="Alt"
              />
              <p className="what-do-we-offer-card-text">Funding</p>
            </div>
          </div>
        </div>
        <a className="btn" role="button" href="#team">
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
