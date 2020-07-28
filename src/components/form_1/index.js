import React, { Component } from "react";

export default class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: { name: "", age: "", email: "", phoneNumber: "" },
      err: { name: "", age: "", email: "", phoneNumber: "" },
      formValid: false,
      nameValid: false,
      ageValid: false,
      emailValid: false,
      phoneNumberValid: false,
    };
  }

  onchangeform = (event) => {
    console.log("ok");
    this.setState(
      {
        values: {
          ...this.state.values,
          [event.target.name]: event.target.value,
        }
      }
      
    );
  };
  onchangError = (event) => {
    let { name, value } = event.target;
    let mess = value === "" ? "moi ban dien thong tin vo" : "";
    let { nameValid, ageValid, emailValid, phoneNumberValid } = this.state;
    switch (name) {
      case "name":
        nameValid = mess === "" ? false : true;
        break;
      case "age":
        ageValid = mess === "" ? false : true;
        break;
      case "email":
        if (
          !value.match(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
              "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          )
        ) {
          emailValid = false;
          mess = "không đúng định dạng.";
        }
        break;
      case "phoneNumber":
        if (!value.match("^[0-9]*$")) {
          phoneNumberValid = false;
          mess = "không đúng định dạng.";
        }
        break;
      default:
        break;
    }
    this.setState({
      err: { ...this.state.err, [name]: mess },
      nameValid,
      ageValid,
      emailValid,
      phoneNumberValid
    },()=>{this.formValid()});
  };
  formValid = () => {
    this.setState({
      formValid:
        this.state.ageValid &&
        this.state.emailValid &&
        this.state.phoneNumberValid &&
        this.state.nameValid,
    });
  };
  submitForm=(e)=>{
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    let {err}=this.state;
    return (
      <div style={{ width: "60%", margin: "0 auto" }}>
        <form >
          <div className="form-group">
            <label htmlFor="exampleInputname">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname"
              aria-describedby="emailHelp"
              name="name"
              onChange={this.onchangeform}
         
              onBlur={this.onchangError}
              onKeyUp={this.onchangError}
            />
            {err.name===""?"":err.name}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputage">age</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputage"
              name="age"
              onChange={this.onchangeform}
          
              onBlur={this.onchangError}
              onKeyUp={this.onchangError}
            />
            {err.age===""?"":err.age}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputemail">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputemail"
              name="email"
              onChange={this.onchangeform}
          
              onBlur={this.onchangError}
              onKeyUp={this.onchangError}
            />
            {err.email===""?"":err.email}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhoneNumber">PhoneNumber</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPhoneNumber"
              name="phoneNumber"
              onChange={this.onchangeform}
         
              onBlur={this.onchangError}
              onKeyUp={this.onchangError}
            />
            {err.phoneNumber===""?"":err.phoneNumber}
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.submitForm}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
