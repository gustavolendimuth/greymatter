import React from 'react';

export default function HeroSubtitle() {
  return (
    <div className="container the-world-economy-container">
      <div className="row">
        <div className="col-md-12 the-world-economy-container">
          <p className="text-center text-light the-world-economy-text">
            The world economy has been evolving
            faster than ever and we want to contribute to a brighter future
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
  );
}
