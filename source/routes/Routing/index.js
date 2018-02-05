import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as snippets from './snippets'

import CodeBlock from '../../components/CodeBlock'
import SectionTitle from '../../components/SectionTitle'
import Helmet from 'react-helmet'
import Content from '../../components/Content'

const hooks = {
  fetch: ({
    dispatch,
    state
  }) => Promise.all([])
}

const mapState = () => ({})

const Routing = () => {
  return (
    <div>
      <Helmet title='Routing | Services Engineering' />
      <SectionTitle size={5}>Routing</SectionTitle>
      <Content>
        <p>We use React Router for routing within our application. React Router allows us to define our routes in JSX syntax, providing a relatively simple API.</p>
        <p>React Router works nicely on the server also, which allows us to make use of server side rendering in our isomorphic apps.</p>
        <h3>Configuring Routes</h3>
        <p>The below example is a typical configuration for our routes, where we specify which component to render for a given route. This route config is passed into Boiler Room Runner in our <span className='highlight'>client.js</span> and <span className='highlight'>server.js</span>.</p>
        <p>The wrapping route allows us to define a site wide header and footer in a SiteContainer component. Whereas the <span className='highlight'>slug</span> param allows us to have dynamic routes basic on URL params.</p>
        <CodeBlock type='javascript'>{snippets.basicRoutes}</CodeBlock>
        <h3>Route Components</h3>
        <p>In those top level components that are being specified for each of the routes, we will usually do things like fire off requests to fetch and provide the relevent data for that component.</p>
        <p>So a typical route level component might look something like this. We are using redial's <span className='highlight'>provideHooks</span> to fetch our home content when this component is used, and we are then using react-redux's <span className='highlight'>connect</span> to pass that content into our component.</p>
        <CodeBlock type='javascript'>{snippets.routeComponent}</CodeBlock>
        <h3>Routing Around the App</h3>
        <p>We can use the <span className='highlight'>Link</span> component to then move users around the app, in a similar way to how you would expect a traditional a tag to work, but in our case the user will be transitioning client side only i.e. not requesting the page from the server.</p>
        <CodeBlock type='javascript'>{snippets.linkExample}</CodeBlock>
        <h3>withRouter</h3>
        <p>React Router also provides a <span className='highlight'>withRouter</span> higher order component, which we can use to pass in routing details and functionality to a component.</p>
        <p>We could use this to programatically move the user to another part of the app or fetch a particular resource based on a URL param.</p>
        <CodeBlock type='javascript'>{snippets.withRouterExample}</CodeBlock>
        <h3>Resources</h3>
        <ul>
          <li><a href='https://github.com/ReactTraining/react-router/tree/v3/docs'>React Router</a>: routing for React apps (we are currently locked on v3)</li>
        </ul>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Routing)
