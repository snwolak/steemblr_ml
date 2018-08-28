import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Post from './Post'
export default class PostLoader extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       page: 0,
    }
  }
  renderPosts() {

   
  }
  render() {
    return (
      <div>
        {<Post post={this.props.posts[this.state.page]} />}
      </div>
    )
  }
}
PostLoader.propTypes = {
 posts: PropTypes.array
}