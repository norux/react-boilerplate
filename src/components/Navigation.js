import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navigation extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <Link
          to={{ pathname: '/' }}
          className={`nav ${this.props.location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to={{ pathname: '/counter' }}
          className={`nav ${this.props.location.pathname === '/counter' ? 'active' : ''}`}
        >
          Counter
        </Link>
      </div>
    )
  }
}

export default withRouter(Navigation)
