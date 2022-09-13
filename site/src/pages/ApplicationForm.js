/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines */
import React, { useContext, useEffect } from 'react';
import HomeContext from '../context/HomeContext';
import buttonAction from '../img/greymatter-button-action.svg';

export default function ApplicationForm() {
  const {
    setNavbarConfig,
  } = useContext(HomeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavbarConfig({ background: false, position: 'absolute' });
  }, []);

  return (
    <div className="d-flex flex-column gap-5">
      <header className="d-flex flex-column justify-content-between gap-5 application-header">
        <div />
        <div className="container-sm d-flex flex-column application-container gap-5">
          <h1 className="display-3 text-uppercase text-center text-light section-title">Application</h1>
          <p className="text-info application-text">
            Please fill in the form below with the information regarding your project. In case any of the items is not
            applicable, please indicate as N/A.
          </p>
        </div>
        <div />
      </header>
      <main className="application-main pb-5">
        <div className="container-sm application-form-container">
          <section>
            <form
              className="d-flex flex-column gap-3"
              id="application-form"
              data-bss-recipient="da84bfb6ef47d75ff81142daef2547c2"
            >
              <h2 className="display-6 text-uppercase fw-bold application-form-subtitle">General Information</h2>
              <div className="row gy-2 row-cols-1 row-cols-md-3">
                <div className="col">
                  <label className="col-form-label form-label" htmlFor="startupName">
                    <span>Startup&apos;s name</span>
                    <input
                      className="form-control form-control-lg application-form-fields"
                      type="text"
                      id="startupName"
                      required=""
                      minLength="3"
                      spellCheck="true"
                    />
                  </label>
                </div>
                <div className="col">
                  <label className="col-form-label form-label" htmlFor="cnpj">
                    CNPJ/ME
                    <input
                      className="form-control form-control-lg application-form-fields"
                      type="text"
                      id="cnpj"
                      spellCheck="true"
                      required
                      
                      placeholder="00.000.000/0000-00"
                      inputMode="numeric"
                    />
                  </label>
                </div>
                <div className="col">
                  <label className="col-form-label form-label" htmlFor="activity">
                    Activity (sector)
                    <input
                      className="form-control form-control-lg application-form-fields"
                      type="text"
                      id="activity"
                      spellCheck="true"
                      required
                      minLength="3"
                    />
                  </label>
                </div>
              </div>
              <label className="form-label" htmlFor="brief">
                Brief overview of your product/service and business model
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="brief"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="developmentStage">
                Development stage?
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="developmentStage"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="websiteAndMedia">
                Website &amp; Media coverage
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="websiteAndMedia"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="acceleration">
                Acceleration: did you participate in any program?
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="acceleration"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <h2 className="display-6 text-uppercase fw-bold application-form-subtitle" id="founders">
                TEAM &amp; MANAGEMENT
              </h2>
              <label className="form-label" htmlFor="foundersBackground">
                Founders/Management team/Background
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="foundersBackground"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="keyEmployees">
                Key employees and Engagement terms
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="keyEmployees"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <h2 className="display-6 text-uppercase fw-bold application-form-subtitle">STRATEGY AND BUSINESS PLAN</h2>
              <label className="form-label" htmlFor="problemsSolving">
                What problems are you solving for your target customers?
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="problemsSolving"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="expectBusiness">
                Where do you expect the business to be in one year, three years, five years?
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="expectBusiness"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="targetMarket">
                Proposed target market
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="targetMarket"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="businessUnique">
                What makes your business unique and will help you succeed?
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="businessUnique"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="marketInBrazil">
                How big is the addressable market in Brazil?
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="marketInBrazil"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="competitors">
                Competitors/Benchmark
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="competitors"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="barriers">
                Barriers to entry in the market?
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="barriers"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="strategy">
                International strategy?
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="strategy"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <h2 className="display-6 text-uppercase fw-bold application-form-subtitle">CAPTABLE</h2>
              <label className="form-label" htmlFor="investmentFunding">
                Did you receive any investment/funding?
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="investmentFunding"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="captable">
                Captable (fully diluted)
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="captable"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <h2 className="display-6 text-uppercase fw-bold application-form-subtitle">SALES HISTORY</h2>
              <label className="form-label" htmlFor="monthlyRevenue">
                Monthly Revenue Records and Projections
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="monthlyRevenue"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="dre">
                DRE
                <br />
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="dre"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="cac">
                CAC
                <br />
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="cac"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="ltv">
                LTV
                <br />
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="ltv"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="burnRate">
                Burn Rate
                <br />
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="burnRate"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="runwayCash">
                Runway cash
                <br />
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="runwayCash"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <h2 className="display-6 text-uppercase fw-bold application-form-subtitle">
                VALUATION &amp; USE OF PROCEEDS
              </h2>
              <label className="form-label" htmlFor="investmentStructure">
                Investment Structure
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="investmentStructure"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="valuation">
                Valuation
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="valuation"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <label className="form-label" htmlFor="useOfProceeds">
                Use of Proceeds
                <textarea
                  className="form-control form-control-lg application-form-fields"
                  id="useOfProceeds"
                  rows="4"
                  spellCheck="true"
                />
              </label>
              <h2 className="display-6 text-uppercase fw-bold application-form-subtitle">File upload</h2>
              <label className="form-label" htmlFor="files">
                Upload any files that can help us better understand your business.
                <input className="form-control form-control-lg" type="file" id="files" multiple="" />
              </label>
              <div className="d-flex" />
              <div className="row gx-5 gy-4 justify-content-center pt-5">
                <div className="col-12 col-md-auto">
                  <a className="btn btn-graymatter-primary" role="button" href="https://greymatter.technology">Cancel</a>
                </div>
                <div className="col-12 col-md-auto">
                  <button
                    className="btn d-flex justify-content-center align-items-center justify-content-sm-center align-items-xxl-center btn-graymatter-primary"
                    type="submit"
                  >
                    send
                    <img
                      alt="Alt"
                      className="img-fluid"
                      src={ buttonAction }
                      width="20px"
                      height="20px"
                    />
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
