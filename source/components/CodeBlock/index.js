import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

const selectText = el => {
  const range = document.createRange()

  range.selectNode(el)
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
}

const CodeBlock = ({ children, classNames, type }) => (
  <div className={classNames.root}>
    {type && <span className={classNames.type}>{type}</span>}
    <pre onClick={({ target }) => selectText(target)}>
      <code>
        {children}
      </code>
    </pre>
  </div>
)

export default withStyles(styles)(CodeBlock)
