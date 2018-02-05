export const basicRoutes = `import React from 'react'
import { Route, IndexRoute } from 'react-router'

import SiteContainer from 'path/to/component'
import Home from 'path/to/component'
import About from 'path/to/component'
import FAQs from 'path/to/component'
import Story from 'path/to/component'

export default (
  <Route path='/' component={SiteContainer}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='faqs' component={FAQs} />
    <Route path='story/:slug' component={Story} />
  </Route>
)`

export const routeComponent = `import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchHomeContent } from 'path/to/store'

import HomeLayout from 'path/to/components'

const hooks = {
  fetch: ({ dispatch }) => dispatch(fetchHomeContent())
}

const mapState = ({ home }) => ({ home })

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(HomeLayout)
`

export const linkExample = `import React from 'react'
import { Link } from 'react-router'

const Menu = () => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About Us</Link></li>
    <li><Link to='/faqs'>FAQs</Link></li>
  </ul>
)

export default Menu`

export const withRouterExample = `import React from 'react'
import { withRouter } from 'react-router'

class MyProtectedRoute extends Component {
  componentWillMount () {
    if (!isAuthorised()) {
      router.push('/')
    }
  }

  render () {
    return <div>Protected</div>
  }
}

export default withRouter(MyProtectedRoute)`
