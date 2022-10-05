import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeContext from '../context/HomeContext';
import navbarBackground from '../img/greymatter-navbar-background.webp';

export default function Navbar() {
  const { navbarConfig, setLanguageId, languageId, languages } = useContext(HomeContext);

  useEffect(() => {
  }, [languages]);

  const englishId = 'd3761ab6-c643-40b1-9233-00802f961ce6';

  const changeToPortuguese = () => {
    setLanguageId('f5fe0465-f3c4-4821-b535-411d37ca783b');
  };

  const changeToEnglish = () => {
    setLanguageId(englishId);
  };

  return (
    <nav
      className="nav-container"
      style={ {
        position: `${navbarConfig?.position}`,
        background: `url(${navbarConfig?.background && navbarBackground}) bottom / cover no-repeat`,
      } }
    >
      <nav className="navbar navbar-dark navbar-expand-md py-3">
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
                <Link
                  className="nav-link text-uppercase text-center link nav-item-link"
                  to="/who-we-are"
                >
                  {
                    languageId && (
                      languageId === englishId
                        ? 'who we are' : 'Quem somos')
                  }
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase text-center link text-white nav-item-link"
                  to="/team"
                >
                  {
                    languageId && (
                      languageId === englishId
                        ? 'Team' : 'Equipe')
                  }
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase text-center link text-white nav-item-link"
                  to="/community"
                >
                  {
                    languageId && (
                      languageId === englishId
                        ? 'Community' : 'Comunidade')
                  }
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-uppercase text-center link text-white nav-item-link"
                  to="/application"
                >
                  {
                    languageId && (
                      languageId === englishId
                        ? 'Application' : 'Fale conosco')
                  }
                </Link>

              </li>
              <li className="nav-item align-content-center">
                <div className="nav-link text-uppercase text-center link text-white nav-item-link">

                  {
                    languageId && (
                      languageId === englishId
                        ? (
                          <button
                            type="button"
                            role="link"
                            className="text-uppercase text-center link text-white nav-item-link languageButton"
                            onClick={ changeToPortuguese }
                          >
                            <img
                              alt="language flag"
                              width="30px"
                              src="https://www.countryflagsapi.com/png/br"
                            />
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="text-uppercase text-center link text-white nav-item-link languageButton"
                            onClick={ changeToEnglish }
                          >
                            <img
                              alt="language flag"
                              width="30px"
                              src="https://www.countryflagsapi.com/png/gb"
                            />
                          </button>
                        )
                    )
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
