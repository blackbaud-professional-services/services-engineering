import React from 'react'
import { Link } from 'react-router'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

const Menu = ({
  classNames
}) => (
  <nav className={classNames.root}>
    <div className={classNames.container}>
      <ul className={classNames.items}>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/'>
            Getting Started
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/components'>
            Components
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/routing'>
            Routing
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/state'>
            State
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/styles'>
            Styles
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/content'>
            Content
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/integration'>
            Integration
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/tests'>
            Tests
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/build'>
            Build
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/deploy'>
            Deploy
          </Link>
        </li>
        <li>
          <Link
            activeClassName={classNames.current}
            className={classNames.item}
            to='/rails'>
            Rails
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default withStyles(styles)(Menu)
