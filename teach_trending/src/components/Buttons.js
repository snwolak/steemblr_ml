import React, { Component } from 'react'
import styled from 'styled-components'
import store from '../store'
import {savePost} from '../actions/savePost'
import {changePage} from '../actions/interface'
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    font-size :32px;
    margin: 20px;
    cursor: pointer;
    color: #fff;
    border: 0;
    outline: 0;
    background-color: #2196f3;
    padding: 20px;
  }
`
export default class Buttons extends Component {
  handleSave = (props) => {
    store.dispatch(savePost(props))
    this.nextPage()
  }
  nextPage = () => {
    const page = store.getState().interface.page
    if(page === 49) {
      return void 0
    } else {
      store.dispatch(changePage(page + 1));
    }
    
  }
  render() {
    return (
      <Container>
        <button onClick={() => this.handleSave(true)}>POPULAR</button>
        <button onClick={() => this.handleSave(false)}>UNDISCOVERED</button>
        <button onClick={this.nextPage}>SKIP</button>
      </Container>
    )
  }
}
