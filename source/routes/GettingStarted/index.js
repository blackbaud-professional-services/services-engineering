import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as snippets from './snippets'

import CodeBlock from '../../components/CodeBlock'
import Helmet from 'react-helmet'
import Content from '../../components/Content'

const hooks = {
  fetch: ({
    dispatch,
    state
  }) => Promise.all([])
}

const mapState = () => ({})

const GettingStarted = () => {
  return (
    <div>
      <Helmet title='Getting Started | Services Engineering' />
      <Content>
        <h3>Bootstrapping</h3>
        <p><a href='https://github.com/everydayhero/boilermaker'>Boilermaker</a> is an internal tool for quickly bootstrapping new projects. Installing and running Boilermaker to setup all your boilerplate is as simple as running the below commands and following the prompts.</p>
        <CodeBlock type='shell'>{snippets.bootstrap}</CodeBlock>
        <h3>Getting Up and Running</h3>
        <p>Our projects use <a href='https://github.com/everydayhero/boiler-room-builder'>Boiler Room Builder (BRB)</a> to handle the build configuration, making it simple to run and build isomorphic React apps. Thankfully, BRB does most of the dirty work for configuring our app's Webpack configs.</p>
        <p>Boilermaker hooks up all the BRB scripts we need to start, build, lint and test our app. Starting a local dev server is as simple as installing our dependencies and starting the app.</p>
        <CodeBlock type='shell'>{snippets.start}</CodeBlock>
        <p>The <span className='highlight'>client.js</span> and <span className='highlight'>server.js</span> are the entry points for our app, and you will see this is where we setup our app using <a href='https://github.com/everydayhero/boiler-room-runner'>Boiler Room Runner</a>.</p>
        <p>Boiler Room Runner provides <span className='highlight'>createServer</span> and <span className='highlight'>createClient</span> functions, which take things like our routes and store among other things, and configures the app, using common libraries like React Router (routing), Redux (state management) and Redial (data fetching).</p>
        <h3>Coding Style</h3>
        <p>We are using Babel, which allows us to use all the latest JavaScript features (ES6) and transpiles our code to run on all supported browsers and environments.</p>
        <p>Our code should follow <a href='https://github.com/standard/standard'>JS Standard Style</a>, and our dev server will actually notify us on the fly of any linting issues.</p>
        <p>We also use JSX, which is a HTML-like syntax that we use a convenience to define the output of our React components.</p>
        <h3>Resources</h3>
        <ul>
          <li><a href='https://github.com/everydayhero/boilermaker'>Boilermaker</a>: internal tool to bootstrap services projects</li>
          <li><a href='https://github.com/everydayhero/boiler-room-builder'>Boiler Room Builder</a>: internal tool for handling building, serving and deploying</li>
          <li><a href='https://github.com/everydayhero/boiler-room-runner'>Boiler Room Runner</a>: internal tool for setting up our app e.g. React, Redux, React-Router</li>
          <li><a href='https://yarnpkg.com/en/'>Yarn</a>: dependency management</li>
          <li><a href='https://babeljs.io/'>Babel</a>: JavaScript transpiler</li>
          <li><a href='https://github.com/standard/standard'>Standard</a>: JavaScript style guide and linter </li>
        </ul>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(GettingStarted)
