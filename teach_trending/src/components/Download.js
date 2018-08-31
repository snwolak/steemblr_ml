import React, { Component } from 'react'
import fileDownload from 'js-file-download'
import store from '../store'
export default class Download extends Component {
  handleDownload = () => {
    const content = store.getState().posts.list
    fileDownload(JSON.stringify(content), 'dataset.json')
  }
  render() {
    return (
      <button onClick={this.handleDownload}>
        Download
      </button>
    )
  }
}
