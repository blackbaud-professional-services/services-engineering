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

const Integration = () => {
  return (
    <div>
      <Helmet title='Integration | Services Engineering' />
      <SectionTitle size={5}>Integration</SectionTitle>
      <Content>
        <p>Our apps will almost always involve some sort of integration with either the Everydayhero or JustGiving platforms, which can range from a simple link to a registration form, to fetching and displaying leaderboard data, to custom registration flows that leveraging the relevant API.</p>
        <h3>Supporticon</h3>
        <p><a href='https://github.com/everydayhero/supporticon'>Supporticon</a> is our library for handling these integrations. It started out as a library to standardise some calls to the EDH API, but now aims to standardise the EDH and JG APIs where possible.</p>
        <p>For example, after telling it which platform you are using, calling a function like <span className='highlight'>fetchLeaderboard</span>, will make the call to the relevant API, and return the leaders in a standard format, regardless of platform.</p>
        <p>Similar to Prismic content, fetching data from the API and storing in our Redux store is a common task, so supporticon has some helpers for that.</p>
        <h3>Components</h3>
        <p>Supporticon also contains a number of data-driven <a href='https://everydayhero.github.io/supporticon/components/'>components</a>, composed of Constructicon components, that can be easily dropped into projects, as shown below.</p>
        <CodeBlock type='javascript'>{snippets.supporticon}</CodeBlock>
        <h3>Resources</h3>
        <ul>
          <li><a href='https://github.com/everydayhero/supporticon'>Supporticon</a>: internal SDK for our APIs</li>
          <li><a href='https://everydayhero.github.io/supporticon/components/'>Supporticon Components</a>: library of data-driven funcraising components</li>
          <li><a href='http://developer.everydayhero.com/'>Everydayhero API Documentation</a>: details of the EDH API</li>
          <li><a href='http://api.justgiving.com/docs'>JustGiving API Documentation</a>: details of the JG API</li>
        </ul>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Integration)
