import React from 'react'
import { Link } from 'react-router'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import EmojIcon from '../EmojIcon'

class Header extends React.Component {
  constructor () {
    super()
    this.state = { top: true }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    this.checkIfTop()
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    this.checkIfTop()
  }

  checkIfTop () {
    const { top } = this.state

    const y = window.scrollY
    const isTop = y === 0

    if (isTop && !top) {
      this.setState({ top: true })
    }

    if (!isTop && top) {
      this.setState({ top: false })
    }
  }

  render () {
    const { classNames } = this.props
    const { top } = this.state

    return (
      <div
        style={{ boxShadow: `0 15px 30px 0 rgba(0,0,0,0.0${top ? '0' : '3'})` }}
        className={classNames.root}
      >
        <div className={classNames.inner}>
          <Link to='/'>
            <EmojIcon name='computer' /> Services Engineering
          </Link>
          <div className={classNames.line} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
