import React from 'react'
import * as traits from '../../lib/traits'

import Page from '../../components/Page'
import TraitsProvider from 'constructicon/traits-provider'

const Container = ({
  children
}) => (
  <TraitsProvider traits={traits}>
    <Page>
      {children}
    </Page>
  </TraitsProvider>
)

export default Container
