import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Routes from '@/components/Routes'
import AppAction from '@/store/app/AppAction'
import Navigation from '@/components/Navigation'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(AppAction.setVersion('1.0.0'))
  }

  render () {
    const { app } = this.props
    return (
      <div className='container'>
        <div className='version'>
          {app.version}
        </div>
        <Navigation/>
        {Routes}
      </div>
    )
  }
}

export default withRouter(
  connect(state => state)(App)
)
