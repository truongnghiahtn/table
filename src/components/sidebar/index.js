import React, { Component } from "react";
import $ from "jquery";
import {NavLink} from "react-router-dom";

export default class index extends Component {
  componentDidMount(){
    // let Scrollbar = window.Scrollbar;
    // if ($("#sidebar-scrollbar").length) {
    //   Scrollbar.init(document.querySelector("#sidebar-scrollbar"));
    // }
    // let Scrollbar1 = window.Scrollbar;
    // if ($("#right-sidebar-scrollbar").length) {
    //   Scrollbar1.init(document.querySelector("#right-sidebar-scrollbar"));
    // }

    $("#btn1").on("click", function() {
      if ($("#collapseOne").hasClass("show")) {
        $("#menu1").removeClass("menu-open");
      } else {
        $("#menu1").addClass("menu-open");
      }
      $(".nghia").toggleClass('menu-open');
    });

    $("#btn2").on("click", function() {
      if ($("#collapseTwo").hasClass("show")) {
        $("#menu2").removeClass("menu-open");
      } else {
        $("#menu2").addClass("menu-open");
      }
    });
  }

 openMenu=()=>{
  $(".wrapper-menu").toggleClass('open');
  $("body").toggleClass("sidebar-main");
 }



  render() {
    return (
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <a href="index.html">
            <img src="/assets/images/logo-base.png" className="img-fluid"  />
          </a>
          <div className="iq-menu-bt-sidebar">
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu" onClick={this.openMenu}>
                <div className="main-circle">
                  <i className="ri-more-fill" />
                </div>
                <div className="hover-circle">
                  <i className="ri-more-2-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul className="iq-menu">
              <li className="iq-menu-title">
                <i className="ri-subtract-line" />
                <span>Trang chủ</span>
              </li>
              <li className="active">
                <NavLink
                 className="iq-waves-effect" to="/admin/dashboard">
                  <i className="ri-home-8-fill" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="iq-menu-title">
                <i className="ri-subtract-line" />
                <span>Quản lý</span>
              </li>
              <li className>
                <NavLink  className="iq-waves-effect" to="/admin/user">
                  <i className="fa fa-user-circle" aria-hidden="true" />
                  <span>User</span>
                </NavLink>
              </li>
              <li></li>
              <li className>
                <a href="website.html" className="iq-waves-effect">
                  <i className="fa fa-chrome" aria-hidden="true" />
                  <span>Website</span>
                </a>
              </li>
              <li id="menu1">
                <a
                  href="#"
                  className="iq-waves-effect collapsed"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  id="btn1"
                >
                  <i className="fa fa-address-card" aria-hidden="true"></i>
                  <span>Khách hàng</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu nghia collapse" id="collapseOne">
                  <li>
                    <NavLink to="/admin-customer">
                      <i className="fa fa-id-badge" aria-hidden="true" />
                      Thông tin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin-word-approval">
                      <i className="fa fa-flag-checkered" aria-hidden="true" />
                      Bổ sung từ
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="btn2" id="btn2">
                <a  className="iq-waves-effect" onClick={this.openbtn2} style={{cursor:'pointer'}}>
                  <i className="fa fa-language" aria-hidden="true" />
                  <span>Ngôn ngữ</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu iq-submenubtn2">
                  <li>
                    <a href="english.html">
                      <i className="fa fa-flag-checkered" aria-hidden="true" />
                      Tiếng anh
                    </a>
                  </li>
                  <li>
                    <NavLink to="/admin/movie">
                      <i className="fa fa-film" aria-hidden="true" />
                      Tựa đề phim
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="p-3" />
        </div>
      </div>
    );
  }
}
