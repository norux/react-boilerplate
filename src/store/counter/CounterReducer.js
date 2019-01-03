import { DECREMENT_COUNTER, INCREMENT_COUNTER, CLEAR_COUNTER } from '@/store/types'

const initState = {
  count: 0
}

export default function (state = initState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      let { count } = state
      return {
        ...state,
        count: count + 1
      }
    }

    case DECREMENT_COUNTER: {
      let { count } = state
      return {
        ...state,
        count: count - 1
      }
    }

    case CLEAR_COUNTER: {
      return {
        ...state,
        count: 0
      }
    }
  }
  return state
}
