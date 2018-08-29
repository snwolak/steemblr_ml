import { SAVE_POST } from "../actions/types";

const initialState = {
  list: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SAVE_POST:
    return {
      ...state,
      list: action.payload
    };
    default: {
      return {
        ...state
      }
    }
  }
}