import React, { useCallback, useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Context from '../../context/Context';
import navbarBackground from '../assets/img/greymatter-navbar-background.webp';
import '../assets/styles/Navbar.css';

export default function NavbarComponent() {
  const { navbarConfig, setLanguageId, languageId } = useContext(Context);

  const englishId = 'd3761ab6-c643-40b1-9233-00802f961ce6';
  const portugueseId = 'f5fe0465-f3c4-4821-b535-411d37ca783b';

  const changeToPortuguese = useCallback(() => {
    setLanguageId(portugueseId);
  }, [setLanguageId, portugueseId]);

  const changeToEnglish = useCallback(() => {
    setLanguageId(englishId);
  }, [setLanguageId, englishId]);

  return (
    <div className="navbar nav-container w-100">
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className="w-100"
        style={{
          top: '0',
          position: `${navbarConfig?.position}`,
          background: `url(${navbarConfig?.background && navbarBackground}) bottom / cover no-repeat`,
        }}
      >
        <div className="container py-3">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-2" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <LinkContainer to="/who-we-are">
                <Nav.Link className="text-uppercase text-center link text-white nav-item-link">
                  {languageId && (languageId === englishId ? 'who we are' : 'Quem somos')}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link className="text-uppercase text-center link text-white nav-item-link">
                  {languageId && (languageId === englishId ? 'Team' : 'Equipe')}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/community">
                <Nav.Link className="text-uppercase text-center link text-white nav-item-link">
                  {languageId && (languageId === englishId ? 'Community' : 'Comunidade')}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/application">
                <Nav.Link className="text-uppercase text-center link text-white nav-item-link">
                  {languageId && (languageId === englishId ? 'Application' : 'Fale conosco')}
                </Nav.Link>
              </LinkContainer>
              <Nav.Link className="text-uppercase text-center link text-white nav-item-link">
                {languageId && (
                  languageId === englishId ? (
                    <button
                      type="button"
                      role="link"
                      className="text-uppercase text-center link text-white nav-item-link languageButton"
                      onClick={changeToPortuguese}
                    >
                      <img
                        src="https://flagcdn.com/w40/br.png"
                        srcSet="https://flagcdn.com/w80/br.png 2x"
                        width="30px"
                        alt="Brazil"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="text-uppercase text-center link text-white nav-item-link languageButton"
                      onClick={changeToEnglish}
                    >
                      <img
                        src="https://flagcdn.com/w40/gb.png"
                        srcSet="https://flagcdn.com/w80/gb.png 2x"
                        width="30px"
                        alt="United Kingdom"
                      />
                    </button>
                  )
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
