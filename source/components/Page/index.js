import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Content from '../../components/Content'
import Header from '../Header'
import Menu from '../Menu'

const Page = ({
  children,
  classNames
}) => (
  <div className={classNames.root}>
    <Header />
    <div className={classNames.intro}>
      <Content maxWidth={26}>
        <h1>The following is a guide to how we build apps in services. We mostly build Universal JavaScript apps, and we have a collection of tools to help us.</h1>
      </Content>
      <Content maxWidth={18}>
        <p>Universal, or Isomorphic, JavaScript describes applications where the same codebase runs both on the server and in the browser.</p>
      </Content>
    </div>
    <Menu />
    <section className={classNames.content}>
      <div className={classNames.contentInner}>
        {children}
      </div>
    </section>
  </div>
)

export default withStyles(styles)(Page)
