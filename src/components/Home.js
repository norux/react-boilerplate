import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  render () {
    return (
      <div>
        This is Home
      </div>
    )
  }
}

export default connect(state => state)(Home)
