import { combineReducers } from 'redux'
import postsRed from './postsRed'
import interfaceRed from './interfaceRed';
import steemRed from './steemRed'

export default combineReducers({
  posts: postsRed,
  interface: interfaceRed,
  steem: steemRed
})