import axios from "axios";

export const loginUser = user => dispatch => {
  axios
    .post("/users/login", user)
    .then(res => {
      const { token } = res.data;
      dispatch(setAuth(true));
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setAuth = value => ({
  type: SET_AUTH,
  payload: value
});
