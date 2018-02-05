export const statelessComponent = `import React from 'react'

const Title = ({ children }) => <h1>{children}</h1>

export default Title`

export const statelessComponent2 = `import React from 'react'
import Title from 'path/to/Title'

const Content = ({
  title,
  copy
}) => (
  <div>
    <Title>{title}</Title>
    <div>{copy}</div>
  </div>
)

export default Content`

export const statefulComponent = `import React from 'react'

class Menu extends React.Component {
  constructor () {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      toggled: false
    }
  }

  toggleMenu () {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.toggleMenu}>
          {this.state.toggled ? 'Hide' : 'Show'}
        </button>
        {this.state.toggled && (
          <nav>Menu here</nav>
        )}
      </div>
    )
  }
}

export default Menu`

export const lifecycleMethods = `import React from 'react'

class MyComponent extends React.Component {
  constructor () {
    super()
    this.state = { foo: 'bar' }
  }

  componentDidMount () {
    this.setState({ foo: 'baz' })
  }

  render () {
    return (
      <div>{this.state.foo}</div>
    )
  }
}

export default MyComponent`

export const connectedComponent = `connect(mapStateToProps, mapDispatchToProps)(Component)`

export const higherOrderComponent = `import React from 'react'
import withToggle from 'constructicon/with-toggle'

const Menu = ({
  onToggle,
  toggled
}) => (
  <div>
    <button onClick={onToggle}>
      {toggled ? 'Hide' : 'Show'}
    </button>
    {toggled && (
      <nav>Menu here</nav>
    )}
  </div>
)

export default withToggle(Menu)`

export const constructiconExample = `import React from 'react'
import Heading from 'constructicon/heading'
import RichText from 'constructicon/rich-text'
import Section from 'constructicon/section'

const MyComponent = () => (
  <Section background='light' foreground='dark'>
    <Heading color='primary'>My Title</Heading>
    <RichText>
      <p>Lorem ipsum</p>
    </RichText>
  </Section>
)

export default MyComponent`
