import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Menu from '../Menu'

const Page = ({
  children,
  classNames
}) => (
  <div className={classNames.root}>
    <aside className={classNames.sidebar}>
      <Menu />
    </aside>
    <section className={classNames.content}>
      {children}
    </section>
  </div>
)

export default withStyles(styles)(Page)
