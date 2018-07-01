import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { getData } from '../../store/actions'

class AboutPage extends Component {
  handleClick = () => {
    this.props.getData()
  }

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <Link to="/">Home</Link>
        <button type="button" onClick={this.handleClick}>
          Get data
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  { getData }
)(AboutPage)
