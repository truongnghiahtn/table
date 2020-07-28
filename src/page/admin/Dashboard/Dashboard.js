import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="iq-card">
                    <div className="iq-card-body iq-bg-primary rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="rounded-circle iq-card-icon bg-primary">
                          <i className="fas fa-language" />
                        </div>
                        <div className="text-right">
                          <h2 className="mb-0">
                            <span className="counter">5600</span>
                          </h2>
                          <h5 className>Doctors</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="iq-card">
                    <div className="iq-card-body iq-bg-warning rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="rounded-circle iq-card-icon bg-warning">
                          <img src="images/language/uk_big.png" alt />
                        </div>
                        <div className="text-right">
                          <h2 className="mb-0">
                            <span className="counter">3450</span>
                          </h2>
                          <h5 className>Nurses</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="iq-card">
                    <div className="iq-card-body iq-bg-danger rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="rounded-circle iq-card-icon bg-danger">
                          <img src="images/language/france_big.png" alt />
                        </div>
                        <div className="text-right">
                          <h2 className="mb-0">
                            <span className="counter">3500</span>
                          </h2>
                          <h5 className>Patients</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="iq-card">
                    <div className="iq-card-body iq-bg-info rounded">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="rounded-circle iq-card-icon bg-info">
                          <img src="images/language/japan_big.png" alt />
                        </div>
                        <div className="text-right">
                          <h2 className="mb-0">
                            <span className="counter">4500</span>
                          </h2>
                          <h5 className>Pharmacists</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title"> 3D Pie Chart</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div id="am-3dpie-chart" style={{ height: 500 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-white iq-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="terms-of-service.html">Terms of Use</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-right">
                Copyright 2020 <a href="#">XRay</a> All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
