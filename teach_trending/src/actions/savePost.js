import { SAVE_POST } from "./types";
import store from '../store'
import checkPostsValue from '../helpers/checkPostsValue'
import PostObj from '../class/PostObj'
export const savePost = props => dispatch => {
const page = store.getState().interface.page
const steemPost = store.getState().steem.posts
const list = store.getState().posts.list

const votes = steemPost[page].net_votes
const comments = steemPost[page].children
const value = checkPostsValue([
  steemPost[page].total_payout_value.replace("SBD", ""),
  steemPost[page].pending_payout_value.replace("SBD", ""),
  steemPost[page].total_pending_payout_value.replace("STEEM", "")
])
const trending = props
const post = new PostObj(votes, comments, value, trending)
const array = [post];
  dispatch({
    type: SAVE_POST,
    payload: list.concat(array)
  });
  
};