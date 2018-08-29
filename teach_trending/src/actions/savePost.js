import { SAVE_POST } from "./types";

export const savePost = props => dispatch => {
  dispatch({
    type: SAVE_POST,
    payload: props
  });
};