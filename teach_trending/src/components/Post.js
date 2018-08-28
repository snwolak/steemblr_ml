import React, { Component } from 'react'
import styled from 'styled-components'
import checkPostsValue from '../helpers/checkPostsValue'
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;


`
export default class Post extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       page: 0,
    }
  }
  
  render() {
    return (
      <Container>
        <p>Votes: {this.props.post.net_votes}</p>
        <p>Comments: {this.props.post.children}</p>
        <p>Value: {checkPostsValue([
        this.props.post.total_payout_value.replace("SBD", ""),
        this.props.post.pending_payout_value.replace("SBD", ""),
        this.props.post.total_pending_payout_value.replace("STEEM", "")
      ])}</p>
      </Container>
    )
  }
}
