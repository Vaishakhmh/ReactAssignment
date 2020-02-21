import { SET_AUTH } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    default:
      return state;
  }
}
