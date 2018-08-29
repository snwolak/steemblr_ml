import { API_CALL } from "./types";
import steem from 'steem'

export const getData = props => async dispatch => {
  let bucket = [];
  const posts = await steem.api.getDiscussionsByHotAsync({tag: props, limit: 50}).then(res => {
    bucket.push(res)
  }).then(res => {
    dispatch({
      type: API_CALL,
      payload: bucket[0]
    });
    }).catch(err => {
    console.log(err)
  })
  
};