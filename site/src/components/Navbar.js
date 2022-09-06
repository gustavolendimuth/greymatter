import React, { useContext } from 'react';
import HomeContext from '../context/HomeContext';
import navbarBackground from '../img/greymatter-navbar-background.webp';

export default function Navbar() {
  const { navbarConfig } = useContext(HomeContext);

  return (
    <nav
      style={ {
        left: '0px',
        top: '0px',
        width: '100%',
        position: `${navbarConfig?.position}`,
        zIndex: '1000',
        background: `url(${navbarConfig?.background && navbarBackground}) bottom / cover no-repeat`,
      } }
    >
      <nav className="navbar navbar-dark navbar-expand-sm py-3">
        <div className="container-fluid">
          <button
            type="button"
            data-bs-toggle="collapse"
            className="navbar-toggler border-2"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon fs-4" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-evenly"
            id="navcol-1"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-center link nav-item-link"
                  href="/#who-we-are"
                >
                  who we are
                </a>

              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-center link text-white nav-item-link"
                  href="/#team"
                >
                  Team
                </a>

              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-center link text-white nav-item-link"
                  href="/#community"
                >
                  Community
                </a>

              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-center link text-white nav-item-link"
                  href="/#application"
                >
                  Application
                </a>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
