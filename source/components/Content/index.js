import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import RichText from 'constructicon/rich-text'

const Content = ({
  styles,
  ...props
}) => (
  <RichText
    styles={styles.root}
    {...props}
  />
)

export default withStyles(styles)(Content)
