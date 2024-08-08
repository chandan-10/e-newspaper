import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <div className="container">
            <img src={loading} alt="loading" />
        </div>
      </div>
    )
  }
}
