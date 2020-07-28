import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import $ from "jquery";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  test = () => {
    $(".icon-active").toggleClass("dl-active");
    if ($(".icon-active").hasClass("dl-active")) {
      $(".dl-menu").addClass("dl-menuopen");
    } else {
      $(".dl-menu").removeClass("dl-menuopen");
    }
  };
  componentDidUpdate(prevProps) {
    if (this.state.width < 1024) {
      $(".responsive-menu")
        .removeClass("xv-menuwrapper")
        .addClass("dl-menuwrapper");
    } else {
      $(".responsive-menu")
        .removeClass("dl-menuwrapper ")
        .addClass("xv-menuwrapper");
      if ($(".icon-active").find("dl-active") ) {
        $(".icon-active").removeClass("dl-active")
        $(".dl-menu").removeClass("dl-menuopen");
      }
 
    }
  }

  render() {
    return (
      <nav className="mainnav navbar navbar-default justify-content-between">
        <div className="container relative">
          <div className="tc-site-logo">
            <NavLink title="Tra câu Việt - Anh" to="/">
              <div className="tc-site-logo-text">
                <h1>QUẢN LÝ</h1>
                <span>&nbsp;SINH VIÊN</span>
                <h2>Công cụ quản lý hàng đầu</h2>
              </div>
            </NavLink>
          </div>

          <div className="paper_menu">
            <div id="dl-menu" className="xv-menuwrapper responsive-menu">
              <ul className="dl-menu align-items-center">
                <li>
                  <NavLink to="/gioi-thieu" activeClassName="active">
                    Giới thiệu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Dich-vu">Dich vu</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/api">API</NavLink>
                </li> */}
                {/* <li>
                  <NavLink to="/bo-sung">Bổ sung câu mới</NavLink>
                </li> */}
                <li>
                  <NavLink to="/lien-he">Liên hệ</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="icon icon-active dl-trigger paper-nav-toggle "
            onClick={this.test}
          >
            <i> </i>
          </div>
        </div>
      </nav>
    );
  }
}
