import React from 'react';
import greymatterHeroGrayMatterSm from '../img/greymatter-hero-gray-matter-sm.svg';
import greymatterHeroGrayMatterLg from '../img/greymatter-hero-gray-matter-lg.svg';

export default function HeroContent() {
  return (
    <div className="container-sm d-flex justify-content-center">
      <div className="row gy-4 gx-lg-5 gy-lg-0 mx-auto gray-matter-row">
        <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start p-0">
          <img
            className="img-fluid d-lg-none gray-matter-logo"
            src={ greymatterHeroGrayMatterSm }
            alt="Greymatter logo"
          />
          <img
            className="d-none d-lg-inline gray-matter-logo-lg"
            src={ greymatterHeroGrayMatterLg }
            alt="Greymatter logo"
          />

        </div>
        <div className="col-12 col-lg-7 p-0">
          <p className="text-center text-lg-start text-light mb-0 hero-text">
            is an innovative
            investment platform for projects challenged by legal grey areas, that offers
            strategic, legal and advocacy advice, and connects investors with entrepreneurs to
            foster the co-creation of the new economy
          </p>
        </div>
      </div>
      <div className="menuFive">
        <span />
        <span />
        <span />
      </div>
      <div className="menuFive">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
