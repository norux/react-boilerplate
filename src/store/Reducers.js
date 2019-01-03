import { combineReducers } from 'redux'
import AppReducer from '@/store/app/AppReducer'
import CounterReducer from '@/store/counter/CounterReducer'

export default combineReducers({
  app: AppReducer,
  counter: CounterReducer
})
