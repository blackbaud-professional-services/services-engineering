import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

const CodeBlock = ({
  children,
  classNames,
  type
}) => (
  <div className={classNames.root}>
    {type && <span className={classNames.type}>{type}</span>}
    <pre>
      <code>
        {children}
      </code>
    </pre>
  </div>
)

export default withStyles(styles)(CodeBlock)
