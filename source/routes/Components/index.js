import React from 'react'
import { Link } from 'react-router'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as snippets from './snippets'

import CodeBlock from '../../components/CodeBlock'
import Helmet from 'react-helmet'
import Content from '../../components/Content'

const hooks = {
  fetch: ({
    dispatch,
    state
  }) => Promise.all([])
}

const mapState = () => ({})

const Components = () => {
  return (
    <div>
      <Helmet title='Components | Services Engineering' />
      <Content>
        <p>Components describe a discrete portion of the UI, by colocating all the requirements in a single place, including behaviour, logic, styles, images, tests etc. This allows us to compose our UI from modular, and potentially reusable, components.</p>
        <h3>Stateless Components</h3>
        <p>Often referred to as functional components, as they are functions that simply take props as an argument, and returns an instance of the component, which will contain other React components, possibly representing DOM elements.</p>
        <p>These are the most common type of component we use.</p>
        <CodeBlock type='javascript'>{snippets.statelessComponent}</CodeBlock>
        <p>The above component is a function that takes a single prop (children), which we are using to ES6 destructuring to assign to a variable, and it returns a h1 with the supplied copy. We could use the above component in another component as follows.</p>
        <CodeBlock type='javascript'>{snippets.statelessComponent2}</CodeBlock>
        <h5>Use Case</h5>
        <ul>
          <li>Wherever possible</li>
        </ul>
        <h3>Stateful Components</h3>
        <p>These components have their own internal state. This state should never be important to other parts of our application, and should only be used for storing simple UI state that we can afford to lose. We define these as ES6 classes that extend the React.Component base class.</p>
        <p>A good example of this might be if we have a toggle to show or hide a menu.</p>
        <CodeBlock type='javascript'>{snippets.statefulComponent}</CodeBlock>
        <p>We can also use these when we need to hook into React component lifecycle methods, such as <span className='highlight'>componentDidMount</span> or <span className='highlight'>componentWillReceiveProps</span>.</p>
        <CodeBlock type='javascript'>{snippets.lifecycleMethods}</CodeBlock>
        <h5>Use Case</h5>
        <ul>
          <li>When we need to keep simple UI state</li>
          <li>When we need to hook into component lifecycle methods</li>
        </ul>
        <h3>Connected Components</h3>
        <p>These are components that connect to your Redux store. This can allow a component to receive up-to-date data from the store, and can also prepare our action creators to be able to dispatch actions.</p>
        <p>These are used to connect sections of our UI to our store, and we will cover this in more detail in our <Link to='/state'>State</Link> section.</p>
        <CodeBlock type='javascript'>{snippets.connectedComponent}</CodeBlock>
        <h5>Use Case</h5>
        <ul>
          <li>When we need to access data from the store</li>
          <li>When we need to connect our action creators</li>
        </ul>
        <h3>Higher Order Components (HOC)</h3>
        <p>This is a pattern for re-using component logic. Put simply, a HOC is a function that takes a component as an argument and returns a new component.</p>
        <p>For example, we were constantly writing stateful components that had the toggle functionality show above, so we abstracted it into a HOC, which can be seen <a href='https://github.com/everydayhero/constructicon/blob/master/source/components/with-toggle/index.js'>here</a>.</p>
        <p>As you can see, this HOC takes a component as an argument, wraps it in a stateful component, which returns the original component with a few extra props to toggle the flag and check the current toggled state. We could refactor our above Menu component to use this HOC.</p>
        <CodeBlock type='javascript'>{snippets.higherOrderComponent}</CodeBlock>
        <p>If you look our connected component example, you will see that it uses <span className='highlight'>connect</span>, which is actually a HOC provided by the react-redux package.</p>
        <h5>Use Case</h5>
        <ul>
          <li>When we need to abstract component logic for reuse</li>
        </ul>
        <h3>Constructicon</h3>
        <p>We have generated a library of re-usable components which we use extensively in our services projects, called <a href='https://everydayhero.github.io/constructicon/'>Constructicon</a>. The docs show each of the available components and the props they take.</p>
        <p>They range from simple components, like a <span className='highlight'>Button</span> or <span className='highlight'>Section</span>, through to more fundraising specific ones like <span className='highlight'>Leaderboard</span>.</p>
        <p>It is important to note these are all dumb components, that don't handle anything other than taking props and rendering a component. It also exports some handy utilities and higher order components.</p>
        <CodeBlock type='javascript'>{snippets.constructiconExample}</CodeBlock>
        <h3>Resources</h3>
        <ul>
          <li><a href='https://reactjs.org/'>React</a>: library for building UI</li>
          <li><a href='https://reactjs.org/docs/react-component.html#the-component-lifecycle'>Component Lifecycle</a>: explanation of available methods</li>
          <li><a href='https://everydayhero.github.io/constructicon/'>Constructicon</a>: internal library of UI components</li>
        </ul>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Components)
