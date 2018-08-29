import { CHANGE_PAGE } from "./types";

export const changePage = props => dispatch => {
  dispatch({
    type: CHANGE_PAGE,
    payload: props
  });
};