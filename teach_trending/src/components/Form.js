import React, { Component } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
padding: 25px;

input {
  height: 20px;
  padding: 3px;
}
button {
  font-weight: 600;
  color: #fff;
  outline: 0;
  background-color: #651fff ;
  border: 0;
  height: 30px;
}
` 

export default class Form extends Component {
  render() {
    return (
      <FormContainer onSubmit={this.props.get}>
        <input type="text" required/>
        <button type="submit">Get Posts</button>
      </FormContainer>
    )
  }
}
