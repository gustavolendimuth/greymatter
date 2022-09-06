import React, { useContext, useEffect } from 'react';
import HomeContext from '../context/HomeContext';
import navbarBackground from '../img/greymatter-navbar-background.webp';

export default function Navbar() {
  const { navbarConfig, setLanguageId, languageId } = useContext(HomeContext);

  const changeToPortuguese = () => {
    setLanguageId('f5fe0465-f3c4-4821-b535-411d37ca783b');
  };

  const changeToEnglish = () => {
    setLanguageId('d3761ab6-c643-40b1-9233-00802f961ce6');
  };

  useEffect(() => {
    console.log(languageId);
  }, [languageId]);

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
                  {
                    languageId === 'd3761ab6-c643-40b1-9233-00802f961ce6'
                      ? 'who we are' : 'Quem somos'
                  }
                </a>

              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-center link text-white nav-item-link"
                  href="/#team"
                >
                  {
                    languageId === 'd3761ab6-c643-40b1-9233-00802f961ce6'
                      ? 'Team' : 'Equipe'
                  }
                </a>

              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-center link text-white nav-item-link"
                  href="/#community"
                >
                  {
                    languageId === 'd3761ab6-c643-40b1-9233-00802f961ce6'
                      ? 'Community' : 'Comunidade'
                  }
                </a>

              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-uppercase text-center link text-white nav-item-link"
                  href="/#application"
                >
                  {
                    languageId === 'd3761ab6-c643-40b1-9233-00802f961ce6'
                      ? 'Application' : 'Fale conosco'
                  }
                </a>

              </li>
              <li className="nav-item">
                {
                  languageId === 'd3761ab6-c643-40b1-9233-00802f961ce6'
                    ? (
                      <button
                        type="button"
                        className="nav-link text-uppercase text-center link text-white nav-item-link languageButton"
                        onClick={ changeToPortuguese }
                      >
                        Portuguese
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="nav-link text-uppercase text-center link text-white nav-item-link languageButton"
                        onClick={ changeToEnglish }
                      >
                        English
                      </button>
                    )
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
