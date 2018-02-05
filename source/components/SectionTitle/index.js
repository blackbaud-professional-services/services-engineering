import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import Heading from 'constructicon/heading'

const SectionTitle = ({
  size = 5,
  styles,
  ...props
}) => (
  <Heading
    size={size}
    styles={styles.root}
    {...props}
  />
)

export default withStyles(styles)(SectionTitle)
