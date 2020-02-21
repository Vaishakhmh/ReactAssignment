import GET_ELEMENTS from "./actions/actionTypes";

export const getelements = () => dispatch =>
  axios.get("/elements").then(res =>
    dispatch({
      type: GET_ELEMENTS,
      payload: res.data
    })
  );
