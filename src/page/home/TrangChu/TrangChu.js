import React, { Component, Fragment } from "react";
import Card from "./../../../components/Card/card";
import OwlCarousel from "react-owl-carousel";
import * as action from "../../../redux/action/index";
import Button from "../../../components/button/button";
import Model from "../CreateUser/form"
import { connect } from "react-redux";

import "./TrangChu.scss";

class TrangChu extends Component {




  componentDidMount(){
    this.props.ListUser();
    this.props.allUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.dayList)
  }

  renderhtmlday = () => {
    let listday = [...this.props.dayList];
    return listday.map((item, index) => {
      return (<th colSpan="2" key={index}>{item.ngay}</th>)
    })
  }
  renderhtmluser = () => {
    let listuser = [...this.props.userList];
    return listuser.map((item, index) => {
      return (<tr key="index">

        <td>{item.HoVaTen}</td>
        <td>{item.ChucVu}</td>
        <td>{item.PhongBan}</td>
        {this.rendercheckday(item)}
      </tr>)
    })
  }
  renderbuoi = () => {
    let listday = [...this.props.dayList];
    return listday.map((item, index) => {
      return (
        <Fragment key={index}>
          <td>sang</td>
          <td>chieu</td>
        </Fragment>
      )
    })
  }
  rendercheckday = (user) => {
    let listday = [...this.props.dayList];
    return listday.map((item, index) => {
      return (
        <Button key={index} day={item} users={user} allUser={this.props.allUser} />
      )
    })
  }

  render() {

    return (
      <div className="quanLyNgay  my-5">

    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
        tao moi
</button>
<Model/>

        <table className="table text-center table-bordered table-dark" >
          <thead>
            <tr>
              <th colSpan="3">test</th>
              {this.renderhtmlday()}

            </tr>
          </thead>
          <tbody>
            <tr >
              <td>Họ và tên</td>
              <td>Phòng bang/Đội</td>
              <td>chức vụ</td>

              {this.renderbuoi()}


            </tr>
            {this.renderhtmluser()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dayList: state.deMoReducer.dayList,
    userList: state.deMoReducer.userList,
    allUser: state.deMoReducer.allUser,
  }
}


const mapDispatchToProps=(dispatch)=>{
  return{
    ListUser:()=>{
      dispatch(action.actGetListUser());
    },
    allUser:()=>{
      dispatch(action.actGetAllUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrangChu);


