import React from 'react'
import connect from 'react-redux/es/connect/connect'
import CounterAction from '@/store/counter/CounterAction'

class PlusMinusButton extends React.Component {
  render () {
    return (
      <div className={`button-group`}>
        <div className={`button normal`} onClick={this.increment.bind(this)}>
          +
        </div>
        <div className={`button danger`} onClick={this.decrement.bind(this)}>
          -
        </div>
      </div>
    )
  }

  increment () {
    this.props.dispatch(CounterAction.increment())
  }

  decrement () {
    this.props.dispatch(CounterAction.decrement())
  }
}

export default connect(state => state)(PlusMinusButton)
