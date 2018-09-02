import React from 'react'
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

const State = () => {
  return (
    <div>
      <Helmet title='State | Services Engineering' />
      <Content>
        <h3>Redux</h3>
        <p>We use <a href='https://github.com/reactjs/redux'>Redux</a> for application state management, when our application state starts to spread and becomes harder to manage, as opposed to just storing app state in stateful components. Redux manages the state (data) of our application in a single immutable source. It is important to understand the concepts of how we access and manipulate this state, and to understand that Redux is a simple concept at it's core.</p>
        <h3>State</h3>
        <p>This refers to the current state of your application, which is represented in an immutable object.</p>
        <CodeBlock type='javascript'>{snippets.state}</CodeBlock>
        <h3>Actions</h3>
        <p>To make changes to the state, you need to dispatch an action, which is a plain object that describes the change. An action contains a <span className='highlight'>type</span>, which describes the type of action, and usually a <span className='highlight'>payload</span>, which provide extra information about the action.</p>
        <p>Actions are generally dispatched via action creators, which are simply functions that return these actions.</p>
        <CodeBlock type='javascript'>{snippets.action}</CodeBlock>
        <h3>Reducers</h3>
        <p>A reducer is a function that can modify our state by listening to actions that have been dispatched, and returns the new state of the app.</p>
        <p>A reducer function takes two arguments every time an action is dispatched, the current state of the application, and the action that was dispatched. A reducer will then determine if it needs to make a change to the state, and either a) return the current state if no change is required or b) return the updated state.</p>
        <CodeBlock type='javascript'>{snippets.reducer}</CodeBlock>
        <h3>Middleware</h3>
        <p>Redux middleware allows you to extend this flow, by hooking into actions before they are passed through the reducer.</p>
        <p>A middleware we commonly use is <span className='highlight'>redux-thunk</span>, which allows us to handle asynchronous operations. Usually an action is a plain object, but if your action is a function, redux-thunk will call that action and provide <span className='highlight'>dispatch</span> as an argument, meaning you can dispatch multiple actions in a single action creator.</p>
        <p>The example below is an asynchronous example of our earlier addUser example, in this case it will fire an action to indicate it will make the request, and then either a success or failure action depending on whether the request was successful.</p>
        <CodeBlock type='javascript'>{snippets.thunk}</CodeBlock>
        <h3>Connecting Components</h3>
        <p>We mentioned in the Components section, that we can create connected components, which are able to interact with our Redux store. This is achieved using the 'connect' higher order component from the 'react-redux' package.</p>
        <p>The <a href='https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options'>connect</a> docs will explain in full, but basically it takes two arguments we are interested in, typically named 'mapStateToProps' and 'mapDispatchToProps'.</p>
        <p>mapStateToProps is a function that will pass you the store as the first argument, and return an object of the props that will be passed into your component.</p>
        <p>mapDispatchToProps can take an object of action creators that will be prepared to be dispatched, and also passed in as props to your component.</p>
        <p>The below component will list all of the users in our store, and provides a button that will dispatch our addUser action creator.</p>
        <CodeBlock type='javascript'>{snippets.connect}</CodeBlock>
        <h3>Resources</h3>
        <ul>
          <li><a href='https://redux.js.org/docs/introduction/CoreConcepts.html'>Redux</a>: state management library</li>
          <li><a href='https://github.com/gaearon/redux-thunk'>Redux Thunk</a>: middleware for dispatching asynchronous actions</li>
          <li><a href='https://github.com/reactjs/react-redux/blob/master/docs/api.md'>React Redux</a>: connects our store to our React components</li>
        </ul>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(State)
