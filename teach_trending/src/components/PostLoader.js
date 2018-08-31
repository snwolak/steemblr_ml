import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import {connect} from 'react-redux'
 class PostLoader extends Component {

  renderPosts() {

   
  }
  render() {
    return (
      <div>
        {<Post post={this.props.posts[this.props.interface.page]} />}
      </div>
    )
  }
}
PostLoader.propTypes = {
 posts: PropTypes.array
}
const mapStateToProps = state => ({
  interface: state.interface
});
export default connect(mapStateToProps,{})(PostLoader);