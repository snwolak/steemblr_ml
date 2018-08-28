import React, { Component } from 'react';
import styled from 'styled-components'
import Form from './components/Form'
import getPosts from './helpers/getPosts'
import PostLoader from './components/PostLoader'
const Container = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

header {
  font-size: 32px;
}
`
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isLoaded: false
    }
  }
  handleGetPosts = async (e) => {
    e.preventDefault()
    const value = e.target.value
    const steemPosts = await getPosts(value)
    this.setState({
      posts: steemPosts,
      isLoaded: true
    })
  }
  render() {
    return (
     <Container>
       <header>Create JSON for ML</header>
        <Form get={this.handleGetPosts}/>
        {this.state.isLoaded && <PostLoader posts={this.state.posts}/>}
     </Container>
    );
  }
}

export default App;
