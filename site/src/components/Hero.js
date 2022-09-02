import React, { useEffect, useState } from 'react';
import sanityClient from '../sanityClient';
import greymatterHeroGrayMatterSm from '../img/greymatter-hero-gray-matter-sm.svg';
import greymatterHeroGrayMatterLg from '../img/greymatter-hero-gray-matter-lg.svg';

export default function HeroContent() {
  const [heroContent, setHeroContent] = useState({});

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "hero"]{
        background,
        image,
        language,
        subTitle,
        text,
      }`,
    ).then((data) => setHeroContent(data))
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (heroContent.length) {
      console.log(heroContent[0].text[0].children[0].text);
    }
  }, [heroContent]);

  return (
    <>
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
            <div className="text-center text-lg-start text-light mb-0 hero-text">
              { heroContent.length && heroContent[0].text[0].children[0].text }
            </div>
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
      <div className="container the-world-economy-container">
        <div className="row">
          <div className="col-md-12 the-world-economy-container">
            <p className="text-center text-light the-world-economy-text">
              {heroContent.length && heroContent[0].subTitle}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <a className="btn" role="button" href="#who-we-are">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-64 0 512 512"
                width="1em"
                height="1em"
                fill="currentColor"
                className="text-light arrow-down hero-arrow-down"
              >
                <path
                  d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </>
  );
}
