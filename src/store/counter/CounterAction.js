import { CLEAR_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER } from '@/store/types'

export default {
  increment () {
    return {
      type: INCREMENT_COUNTER
    }
  },
  decrement () {
    return {
      type: DECREMENT_COUNTER
    }
  },
  clear () {
    return {
      type: CLEAR_COUNTER
    }
  }
}
