import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import SideBar from "./../components/sidebar/index";
import NavBar from "./../components/navbaradmin/index";

const Adminlayout = props => {
  return <Fragment>
    <div className="wrapper">
      <SideBar/>
      <div id="content-page" className="content-page">
      <NavBar/>
      {props.children}
      </div>
    </div>
    </Fragment>;
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        // if (localStorage.getItem("userAdmin")) {
          return (
            <Adminlayout>
              <Component {...propsComponent} />
            </Adminlayout>
          );
        // }
        // chuyen ve trang admin
        // return <Redirect to="/admin" />;
      }}
    />
  );
}
