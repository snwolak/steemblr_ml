import { API_CALL } from "../actions/types";

const initialState = {
 posts: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case API_CALL:
    return {
      ...state,
      posts: action.payload
    };
    default: {
      return {
        ...state
      }
    }
  }
}