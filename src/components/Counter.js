import React from 'react'
import { connect } from 'react-redux'
import CounterAction from '@/store/counter/CounterAction'

class Counter extends React.Component {
  render () {
    const { counter } = this.props

    return (
      <div className={`counter`}>
        <div className={`result`}>
          {counter.count}
        </div>
        <div className={`button-group`}>
          <div className={`button normal`} onClick={this.increment.bind(this)}>
            +
          </div>
          <div className={`button danger`} onClick={this.decrement.bind(this)}>
            -
          </div>
        </div>
        <div className={`button-group`}>
          <div className={`button`} onClick={this.clear.bind(this)}>
            Clear
          </div>
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

  clear () {
    this.props.dispatch(CounterAction.clear())
  }
}

export default connect(state => state)(Counter)
