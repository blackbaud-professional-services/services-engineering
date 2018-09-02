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

const Build = () => {
  return (
    <div>
      <Helmet title='Build | Services Engineering' />
      <Content>
        <h3>Build</h3>
        <p>The aim of the build step is to transpile our JavaScript and bundle our assets into the dist folder ready for deployment. As we are creating isomorphic JavaScript apps, the output of our build will contain the following.</p>
        <ul>
          <li><span className='highlight'>server.js</span>: this is the compiled version of our project's server.js</li>
          <li><span className='highlight'>main.js</span>: this is the compiled version of our project's client.js</li>
          <li><span className='highlight'>main.css</span>: any imported CSS such as our CSS reset</li>
          <li>Other assets such as images and fonts</li>
        </ul>
        <p>Note that if we run the build and <span className='highlight'>NODE_ENV=production</span>, there are a couple of small differences, mainly that our main js and css files will include a hash in the filename, which is used to ensure browsers don't cache old versions.</p>
        <h3>Build Scripts</h3>
        <p>Our build related scripts will look something like the following. The base <span className='highlight'>build</span> script is used as a baseline, whereas <span className='highlight'>build:staging</span> and <span className='highlight'>build:prod</span> are used to pass in specific environment variables.</p>
        <CodeBlock type='json'>{snippets.buildJson}</CodeBlock>
        <p>The <span className='highlight'>BASE_PATH</span> variable is used to set the base path that our application is served from, which we use when our app might not be served from the root e.g. when hosted on Github pages.</p>
        <p>So to build our app for staging, we would run:</p>
        <CodeBlock type='json'>yarn build:staging</CodeBlock>
        <p>So to build our app for production, we would run:</p>
        <CodeBlock type='json'>yarn build:prod</CodeBlock>
        <h3>Static Routes</h3>
        <p>An important concept in our build is the concept of static routes. In our <span className='highlight'>source/server.js</span>, we often specify routes in <span className='highlight'>app.staticRoutes</span>. A static pre-rendered HTML file will be generated, during the build, for each of these routes.</p>
        <p>As opposed to other Isomorphic React apps, where a server receives requests and generates HTML at runtime, we are doing that up front during the build, which effectively lets us deploy completely static sites to S3, without having any of the usual overhead of managing a server.</p>
        <CodeBlock type='javascript'>{snippets.staticRoutes}</CodeBlock>
        <p>If we specified the staticRoutes as above, our build would bundle the usual assets, but also render a <span className='highlight'>index.html</span>, <span className='highlight'>about/index.html</span> and <span className='highlight'>faqs/index.html</span>.</p>
        <p>These generated HTML pages have a couple of important characteristics worth noting.</p>
        <ul>
          <li>They include our <span className='highlight'>main.js</span>, which means our app will load and run in the browser, so subsequent route changes can be handled completely client side</li>
          <li>The complete state of our Redux store during the build, is serialized into a script tag, which is then reloaded back into the store when it loads in the browser</li>
        </ul>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Build)
