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

const Root = () => {
  return (
    <div>
      <Helmet title='Overview | Services Engineering' />
      <SectionTitle size={5}>Overview</SectionTitle>
      <Content>
        <p>This documentation aims to act as a reference point on how we build apps in services, especially for new developers within the team.</p>
        <p>We mostly build Isomorphic JavaScript apps, which execute both on the server and in the browser. We have a reasonably extensive toolbelt to help us build these sites, so hopefully the following pages help illustrate how to use these tools effectively.</p>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Root)
