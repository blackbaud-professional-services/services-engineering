import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'

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

const Tests = () => {
  return (
    <div>
      <Helmet title='Tests | Services Engineering' />
      <SectionTitle size={5}>Tests</SectionTitle>
      <Content>
        <p>Our aims for test coverage vary between projects. Tests should be written for all our long lived libraries and builders, whereas many of our client projects, which often have a short lifespan, are not tested. Although the decision could be made to write tests for a larger app if needed.</p>
        <p>Our test suite is flexible, but typically it would contain some of tools in the below resources section. Running our tests is as simple as running <span className='highlight'>yarn test</span>.</p>
        <h3>Resources</h3>
        <ul>
          <li><a href='https://mochajs.org/'>Mocha</a>: test framework</li>
          <li><a href='http://chaijs.com/'>Chai</a>: assertion library</li>
          <li><a href='https://github.com/airbnb/enzyme'>Enzyme</a>: for testing React components</li>
          <li><a href='http://sinonjs.org/'>Sinon</a>: spies, stubs, mocks</li>
        </ul>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Tests)
