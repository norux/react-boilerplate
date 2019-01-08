import React from 'react'
import { connect } from 'react-redux'
import PlusMinusButton from '@/components/counter/PlusMinusButton'
import ClearButton from '@/components/counter/ClearButton'

class Counter extends React.Component {
  render () {
    const { counter } = this.props

    return (
      <div className={`counter`}>
        <div className={`result`}>
          {counter.count}
        </div>
        <PlusMinusButton />
        <ClearButton />
      </div>
    )
  }
}

export default connect(state => state)(Counter)
