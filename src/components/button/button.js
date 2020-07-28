import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import * as action from "../../redux/action/index";

class button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            statussang: false,
            statuschieu: false,
            mang: [],
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.allUser) {
            this.setState({
                mang: nextProps.allUser
            }, () => {
                setTimeout(() => {
                    this.kiemtra();
                }, 300);
            })

        }

    }
    checksang = () => {
        let data = !this.state.statussang;
        this.setState({
            statussang: data
        }, () => {
            this.check("Sang")
        })
    }
    checkchieu = () => {
        let data = !this.state.statuschieu;
        this.setState({
            statuschieu: data
        }, () => {
            this.check("Chieu")
        })
    }

    check = (Buoi) => {
        let index = this.props.allUser.filter(item => {
            return item.HoVaTen === this.props.users.HoVaTen;
        }).findIndex(item => {
            return (item.Ngay.slice(0, item.Ngay.indexOf("T")) == this.props.day.ngay)
        })
        const obj = {
            ID: "",
            HoVaTen: this.props.users.HoVaTen,
            PhongBan: this.props.users.PhongBan,
            ChucVu: this.props.users.ChucVu,
            Ngay: this.props.day.ngay,
            Sang: Buoi == "Sang" ? 1 : 0,
            Chieu: Buoi == "Chieu" ? 1 : 0,
        };

        // da co du lieu tren severr 
        if (index != -1) {
            console.log(this.props.allUser[index].ID)
            obj.ID = this.props.allUser[index].ID;
            obj.Sang = this.state.statussang == true ? 1 : 0;
            obj.Chieu = this.state.statuschieu == true ? 1 : 0;

            console.log(obj);
            this.props.actPut(obj);
        }
        else {
            this.props.actPost(obj);
        }
    }

    kiemtra = () => {
        let indexsang = this.state.mang.filter(item => {
            return item.HoVaTen === this.props.users.HoVaTen;
        }).findIndex(item => {
            return (item.Ngay.slice(0, item.Ngay.indexOf("T")) == this.props.day.ngay && item.Sang === true)
        })
        let indexchieu = this.state.mang.filter(item => {
            return item.HoVaTen === this.props.users.HoVaTen;
        }).findIndex(item => {
            return (item.Ngay.slice(0, item.Ngay.indexOf("T")) == this.props.day.ngay && item.Chieu === true)
        })

        if (indexsang !=-1) {
            console.log(indexsang)
            this.setState({
                statussang: true
            })
        }
        if (indexchieu !=-1) {
            console.log(indexchieu)
            this.setState({
                statuschieu: true
            })
        }

    }
    render() {
        return (
            <Fragment>
                <td><button onClick={this.checksang} className={this.state.check === true ? "btn btn-info" : "btn"} style={{ color: "white" }}>
                    {this.state.statussang === true ? ("x") : ""}
                </button></td>
                <td><button onClick={this.checkchieu} className={this.state.check === true ? "btn btn-info" : "btn"} style={{ color: "white" }}>{this.state.statuschieu === true ? ("x") : ""}</button></td>
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        allUser: state.deMoReducer.allUser,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        actPost: (datas) => {
            dispatch(action.actPostDay(datas));
        },
        actPut: (datas) => {
            dispatch(action.actPutDay(datas));
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(button);