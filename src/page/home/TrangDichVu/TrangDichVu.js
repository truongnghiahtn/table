import React, { Component } from "react";
import FormCoBan from "./../../../components/form_1/index";
import IteamTable from "./itemTable";
import ModalFather from "./../../../components/ModalFather/Father";
import Chirent from "./modalchirent";
const Modal=ModalFather(Chirent)

export default class TrangDichVu extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Form Basic</h1>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
        >
          {" "}
          tao content
        </button>
        <Modal/>
        <div style={{ margin: "0 auto", width: "90%" }}>
          <table class="table">
            <thead>
              <tr>
                <th>stt</th>
                <th>Username</th>
                <th>Age</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>active</th>
              </tr>
            </thead>
            <IteamTable />
          </table>
        </div>
      </div>
    );
  }
}
