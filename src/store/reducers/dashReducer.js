import GET_ELEMENTS from "../actions/actionTypes";

const initialState = {
  element: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ELEMENTS:
      return {
        ...state,
        elements: action.payload
      };
  }
}
