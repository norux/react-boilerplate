import './static/index.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'

import App from '@/components/App'
import reducers from '@/store/Reducers'

const store = createStore(reducers)
render(
  <Provider store = { store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
