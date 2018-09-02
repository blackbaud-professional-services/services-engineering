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

const Styles = () => {
  return (
    <div>
      <Helmet title='Styles | Services Engineering' />
      <Content>
        <h3>Reset</h3>
        <p>It is always good practice to apply a reset styles to allow us to keep most of our styling in the relevant components. We are currently using <a href='https://github.com/lukebrooker/minimal.css'>minimal.css</a> as our reset.</p>
        <p>To apply, this is imported in our <span className='highlight'>client.js</span>, which Webpack will load and bundle into our app's <span className='highlight'>main.css</span>.</p>
        <h3>Traits</h3>
        <p>Traits our are way of re-using styling values and functions, in a similar vein to the concept of variables and mixins in Sass.</p>
        <p>We can use Constructicon's default traits, and override them using the <span className='highlight'>TraitsProvider</span> component.</p>
        <CodeBlock type='javascript'>{snippets.traitsProvider}</CodeBlock>
        <p>Below are some of the common traits you will likely use:</p>
        <ul>
          <li><span className='highlight'>breakpoints</span>: a list of breakpoints e.g. sm, md, lg</li>
          <li><span className='highlight'>colors</span>: color palette</li>
          <li><span className='highlight'>mediaQuery</span>: a function that takes one of the breakpoint sizes and generates a media query</li>
          <li><span className='highlight'>fonts</span>: font stack</li>
          <li><span className='highlight'>rhythm</span>: a function that takes an integer and converts to consistent rem values e.g. rhythm(1) = '1.5rem'</li>
          <li><span className='highlight'>scale</span>: a function that creates a modular scale of font sizes</li>
          <li><span className='highlight'>treatments</span>: specify other font treatments, such as weight</li>
        </ul>
        <h3>Styling Components</h3>
        <p>We are currently using <a href='https://github.com/benoneal/cxsync'>CXSync</a>, which is a fork of the CXS library as our CSS-in-JS solution. It works by generating CSS classes from objects of styles you pass it, which you can then add to your elements.</p>
        <p>We use <span className='highlight'>withStyles</span> HOC as our pattern for generating these classes. It takes a styles function as an argument, which will take both the component's props and the project's traits as arguments, and you will return a styles object.</p>
        <p>This pass in 2 props, a <span className='highlight'>classNames</span> object which will be a map of generated class names, and a <span className='highlight'>styles</span> which is a map of the raw styles.</p>
        <p>We use classNames to apply actual CSS class names to an element, where as styles is usually used to forward styles on to customise other components, which in most cases is Constructicon components</p>
        <CodeBlock type='javascript'>{snippets.withStyles}</CodeBlock>
        <h3>Resources</h3>
        <ul>
          <li><a href='https://github.com/lukebrooker/minimal.css'>minimal.css</a>: a CSS reset</li>
          <li><a href='https://github.com/benoneal/cxsync'>CXSync</a>: our current CSS-in-JS solution (looking to move away)</li>
          <li><a href='https://github.com/everydayhero/constructicon/tree/master/source/components/traits-provider'>TraitsProvider</a>: Constructicon component to apply custom traits/themes</li>
          <li><a href='https://github.com/everydayhero/constructicon/tree/master/source/components/withStyles'>withStyles</a>: Constructicon HOC to generate class names and style objects</li>
        </ul>
      </Content>
    </div>
  )
}

// CXS/CXSync
// stylinh constructicon

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Styles)
