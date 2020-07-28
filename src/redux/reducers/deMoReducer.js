import * as ActionType from "../constants/actionType";


let initialState = {
  userList: [],
  allUser: [],
  dayList: [
   
   
    {
      id: 3,
      ngay: "2020-07-22",
      name: "22",
      sang: "x",
      chieu: "x",
    },
    {
      id: 4,
      ngay: "2020-07-23",
      name: "23",
      sang: "x",
      chieu: "x",
    },
    {
      id: 5,
      ngay: "2020-07-24",
      name: "24",
      sang: "x",
      chieu: "x",
    },
    {
      id: 6,
      ngay: "2020-07-25",
      name: "25",
      sang: "x",
      chieu: "x",
    }
  ]
};
const deMoReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GET_LIST_USER:
      state.userList = action.ListUser;
      console.log(state.userList);
      return { ...state };
    case ActionType.GET_ALL_USER:
      state.allUser = action.AllUser;
      return { ...state };

    default:
      return { ...state };
  }
};
export default deMoReducer;
