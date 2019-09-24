import React from 'react'
import { Route } from 'react-router'

import Build from './Build'
import Components from './Components'
import Container from './Container'
import Content from './Content'
import Deploy from './Deploy'
import GettingStarted from './GettingStarted'
import Integration from './Integration'
import Rails from './Rails'
import Routing from './Routing'
import State from './State'
import Styles from './Styles'
import Tests from './Tests'

const scrollBehaviour = () => false

export default (
  <Route component={Container} scrollBehaviour={scrollBehaviour}>
    <Route path='/' component={GettingStarted} />
    <Route path='/build' component={Build} />
    <Route path='/components' component={Components} />
    <Route path='/content' component={Content} />
    <Route path='/deploy' component={Deploy} />
    <Route path='/integration' component={Integration} />
    <Route path='/rails' component={Rails} />
    <Route path='/routing' component={Routing} />
    <Route path='/state' component={State} />
    <Route path='/styles' component={Styles} />
    <Route path='/tests' component={Tests} />
  </Route>
)
