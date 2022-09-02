import React from 'react';
import felipeHanszmann from '../img/felipe-hanszmann.webp';

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="container section" id="team-container">
        <div className="visible spacer" />
        <h1 className="display-3 text-uppercase text-center section-title">Team</h1>
        <div
          className="row gx-0 gy-5 row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center align-items-center pb-5"
          data-bss-disabled-mobile="true"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-offset="200"
          data-aos-delay="500"
        >
          <div className="col">
            <div
              className="d-flex d-xxl-flex flex-column align-items-center"
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              data-bs-placement="bottom"
              title="Linkedin profile"
            >
              <img
                alt="Alt"
                src={ felipeHanszmann }
                className="team-photo"
              />
              <p className="fs-5 fw-bold text-center pt-2 team-text">Felipe Hanszmann</p>
              <div
                className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="team-text"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <a className="fs-6 text-decoration-none text-light team-text" href="#">Executive</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex d-xxl-flex flex-column align-items-center"
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              data-bs-placement="bottom"
              title="Linkedin profile"
            >
              <img src="assets/img/paulo-albert-weyland-vieira.webp" className="team-photo" />
              <p className="fs-5 fw-bold text-center pt-2 team-text">Paulo Vieira</p>
              <div
                className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="team-text"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <a className="fs-6 text-primary text-decoration-none text-light team-text" href="#">Executive</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex d-xxl-flex flex-column align-items-center"
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              data-bs-placement="bottom"
              title="Linkedin profile"
            >
              <img src="assets/img/mauro-finatti.webp" className="team-photo" />
              <p className="fs-5 fw-bold text-center pt-2 team-text">Mauro Finatti</p>
              <div
                className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="team-text"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <a className="fs-6 text-primary text-decoration-none text-light team-text" href="#">Executive</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex d-xxl-flex flex-column align-items-center"
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              data-bs-placement="bottom"
              title="Linkedin profile"
            >
              <img src="assets/img/camila-borba-lefevre.webp" className="team-photo" />
              <p className="fs-5 fw-bold text-center pt-2 team-text">Camila Lefèvre</p>
              <div
                className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="team-text"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <a className="fs-6 text-primary text-decoration-none text-light team-text" href="#">Executive</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex d-xxl-flex flex-column align-items-center"
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              data-bs-placement="bottom"
              title="Linkedin profile"
            >
              <img src="assets/img/john-pfeffer.webp" className="team-photo" />
              <p className="fs-5 fw-bold text-center pt-2 team-text">John Pfeffer</p>
              <div
                className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="team-text"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <a className="fs-6 text-primary text-decoration-none text-light team-text" href="#">
                  Investment Committee
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex d-xxl-flex flex-column align-items-center"
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              data-bs-placement="bottom"
              title="Linkedin profile"
            >
              <img src="assets/img/rafael-duton.webp" className="team-photo" />
              <p className="fs-5 fw-bold text-center pt-2 team-text">Rafael Duton</p>
              <div
                className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="team-text"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <a className="fs-6 text-primary text-decoration-none text-light team-text" href="#">
                  Investment Committee
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex d-xxl-flex flex-column align-items-center"
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              data-bs-placement="bottom"
              title="Linkedin profile"
            >
              <img src="assets/img/andrew-hancock.webp" className="team-photo" />
              <p className="fs-5 fw-bold text-center pt-2 team-text">Andrew Hancock</p>
              <div
                className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="team-text"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <a className="fs-6 text-primary text-decoration-none text-light team-text" href="#">
                  Investment Committee
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex d-xxl-flex flex-column align-items-center"
              data-bs-toggle="tooltip"
              data-bss-tooltip=""
              data-bs-placement="bottom"
              title="Linkedin profile"
            >
              <img src="assets/img/leila-orenstein.webp" className="team-photo" />
              <p className="fs-5 fw-bold text-center pt-2 team-text">Leila Orenstein</p>
              <div
                className="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-32 0 512 512"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="team-text"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <a className="fs-6 text-primary text-decoration-none text-light team-text" href="#">
                  Investment Committee
                </a>
              </div>
            </div>
          </div>
        </div>
        <a className="btn" role="button" href="#community">
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
