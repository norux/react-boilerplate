import { SET_VERSION } from '@/store/types'

export default {
  setVersion (version) {
    return {
      type: SET_VERSION,
      version: version
    }
  }
}
