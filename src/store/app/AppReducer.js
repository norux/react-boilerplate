import { SET_VERSION } from '@/store/types'

const initState = {
  version: null
}

export default function (state = initState, action) {
  switch (action.type) {
    case SET_VERSION: {
      const { version } = action
      return {
        ...state,
        version: version
      }
    }
  }
  return state
}
