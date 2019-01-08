import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import Counter from '@/pages/Counter'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={Counter} />
  </Switch>
)
