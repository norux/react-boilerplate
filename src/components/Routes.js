import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '@/components/Home'
import Counter from '@/components/Counter'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={Counter} />
  </Switch>
)
