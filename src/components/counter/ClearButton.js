import React from 'react'
import connect from 'react-redux/es/connect/connect'
import CounterAction from '@/store/counter/CounterAction'

class ClearButton extends React.Component {
  render () {
    return (
      <div className={`button-group`}>
        <div className={`button`} onClick={this.clear.bind(this)}>
          Clear
        </div>
      </div>
    )
  }

  clear () {
    this.props.dispatch(CounterAction.clear())
  }
}

export default connect(state => state)(ClearButton)
