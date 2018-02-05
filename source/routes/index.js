import React from 'react'
import { Route } from 'react-router'

import Build from './Build'
import Components from './Components'
import Container from './Container'
import Content from './Content'
import Deploy from './Deploy'
import GettingStarted from './GettingStarted'
import Home from './Home'
import Integration from './Integration'
import Routing from './Routing'
import State from './State'
import Styles from './Styles'
import Tests from './Tests'

export default (
  <Route component={Container}>
    <Route path='/' component={Home} />
    <Route path='/build' component={Build} />
    <Route path='/components' component={Components} />
    <Route path='/content' component={Content} />
    <Route path='/deploy' component={Deploy} />
    <Route path='/getting-started' component={GettingStarted} />
    <Route path='/integration' component={Integration} />
    <Route path='/routing' component={Routing} />
    <Route path='/state' component={State} />
    <Route path='/styles' component={Styles} />
    <Route path='/tests' component={Tests} />
  </Route>
)
