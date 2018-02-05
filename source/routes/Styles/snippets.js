export const traitsProvider = `// source/lib/traits
export const colors = {
  primary: '#ff000',
  secondary: '#00ff00'
}

export const fonts = {
  head: 'Montserrat, sans-serif',
  body: 'Montserrat, sans-serif'
}

export const treatments = {
  head: {
    fontFamily: fonts.head,
    fontWeight: 700
  },
  body: {
    fontFamily: fonts.body
  }
}

// Container Components
import React from 'react'
import TraitsProvider from 'constructicon/traits-provider'
import * as traits from '../../lib/traits'

const Container = ({ children }) => (
  <TraitsProvider traits={traits}>
    {children}
  </TraitsProvider>
)

export default Container`

export const withStyles = `import React from 'react'
import withStyles from 'constructicon/with-styles'
import Heading from 'constructicon/heading'

const MyComponent = ({
  classNames,
  styles
}) => (
  <div className={classNames.container}>
    <Heading styles={styles.heading}>My Heading</Heading>
  </div>
)

const styles = (props, traits) => ({
  container: {
    padding: traits.rhythm(1)
  },

  heading: {
    color: traits.colors.red
  }
})

export default withStyles(styles)(MyComponent)`
