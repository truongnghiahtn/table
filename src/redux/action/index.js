import * as Actiontype from "./../constants/actionType";
import Axios from "axios";
import swal from "sweetalert";


export const actGetListUser = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://localhost:44352/api/User",
    })
      .then((result) => {
        console.log(result.data)
        dispatch({
          type: Actiontype.GET_LIST_USER,
          ListUser: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetAllUser = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://localhost:44352/api/khoabieu",
    })
      .then((result) => {
        dispatch({
          type: Actiontype.GET_ALL_USER,
          AllUser: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actPostDay = (data) => {
  console.log(data)
  return (dispatch) => {
    Axios({
      method: "POST",
      url:
        "https://localhost:44352/api/khoabieu",
      data

    })
      .then((result) => {

        console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actPutDay = (data) => {
  console.log(data)
  return (dispatch) => {
    Axios({
      method: "PUT",
      url:
        "https://localhost:44352/api/khoabieu",
      data

    })
      .then((result) => {

      })
      .catch((err) => {
        console.log(err);
      });
  };
};