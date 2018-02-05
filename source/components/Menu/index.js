import React from 'react'
import { Link } from 'react-router'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

const Menu = ({
  classNames
}) => (
  <nav className={classNames.root}>
    <ul>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/'>
          Overview
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/getting-started'>
          Getting Started
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/components'>
          Components
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/routing'>
          Routing
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/state'>
          State
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/styles'>
          Styles
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/content'>
          Content
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/integration'>
          Integration
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/tests'>
          Tests
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/build'>
          Build
        </Link>
      </li>
      <li>
        <Link
          activeClassName={classNames.current}
          to='/deploy'>
          Deploy
        </Link>
      </li>
    </ul>
  </nav>
)

export default withStyles(styles)(Menu)
