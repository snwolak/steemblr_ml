import React, { Component } from 'react'
import fileDownload from 'js-file-download'
import store from '../store'
export default class Download extends Component {
  handleDownload = () => {
    const content = store.getState().posts.list
    const contentFixed = content.map(item => {
      return {
        input: {
          votes: item.votes,
          comments: item.comments,
          value: item.value
        },
        output: {
          trending: item.t === false ? 0 : 1
        }
      }
    })
    fileDownload(JSON.stringify(contentFixed), 'dataset.json')
  }
  render() {
    return (
      <button onClick={this.handleDownload}>
        Download
      </button>
    )
  }
}
