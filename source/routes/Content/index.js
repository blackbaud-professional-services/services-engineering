import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as snippets from './snippets'

import CodeBlock from '../../components/CodeBlock'
import SectionTitle from '../../components/SectionTitle'
import Helmet from 'react-helmet'
import Content from '../../components/Content'

const hooks = {
  fetch: ({
    dispatch,
    state
  }) => Promise.all([])
}

const mapState = () => ({})

const ContentRoute = () => {
  return (
    <div>
      <Helmet title='Content | Services Engineering' />
      <SectionTitle size={5}>Content</SectionTitle>
      <Content>
        <h3>Prismic</h3>
        <p><a href='https://prismic.io'>Prismic</a> is a a hosted CMS service that allows us, and clients, to manage content for sites. Prismic has a few concepts worth understanding.</p>
        <ul>
          <li><span className='highlight'>repository</span>: each site or application lives in it's own repository</li>
          <li><span className='highlight'>custom types</span>: these are our templates, from which we create documents e.g. story, page</li>
          <li><span className='highlight'>document</span>: these are the instances of our custom types that house our actual content</li>
        </ul>
        <p>The steps included to setup a new project in Prismic would include:</p>
        <ol>
          <li>Log into Prismic using the login details in 1Password</li>
          <li>Create a new repository, giving it a unique name and selecting the free plan</li>
          <li>Add our custom types using the type builder UI, or entering the JSON directly in the JSON tab</li>
          <li>It is often a good idea to copy the JSON into your project to track it in source control</li>
          <li>Create document(s) based on our custom types we have set up</li>
          <li>We can now fetch this content via the API</li>
        </ol>
        <h3>Prismic Utils</h3>
        <p>We have an internal library, called <a href='https://github.com/everydayhero/prismic-utils'>Prismic Utils</a>, that handles fetching and parsing documents from Prismic. We can do something like the below example to fetch a document from Prismic.</p>
        <CodeBlock type='javascript'>{snippets.fetchDocument}</CodeBlock>
        <h3>Action Creators / Reducers</h3>
        <p>Fetching document(s) and putting them in a Redux store is a very common task in services projects. Prismic Utils has an abstraction for being able to create Redux action creators and reducers for fetching Prismic documents. The below example is a common example of what you will see in many projects.</p>
        <p>Under the hook, it is fetching document(s), and using redux-thunk to dispatch actions as it does so. And the namespace we provide allows our reducer to listen to those same actions and add the document to our store.</p>
        <CodeBlock type='javascript'>{snippets.reduxHelpers}</CodeBlock>
        <h3>Deserializing Documents</h3>
        <p>Prismic Utils provides another handy utility, which is the <span className='highlight'>deserializeDocument</span> function, which takes a Prismic doc and returns a nice object ccontaining our data. If we are using <span className='highlight'>createDocumentReducer</span>, our documents are automatically parsed using this function.</p>
        <p>It allows us to create nicely nested objects, that make passing data around our app much simpler.</p>
        <CodeBlock type='json'>{snippets.prismicExample}</CodeBlock>
        <p>For example, if our Prismic schema looked something like the above, it would look something like the following in our store after it has been deserialized.</p>
        <CodeBlock type='json'>{snippets.storeExample}</CodeBlock>
        <h3>Resources</h3>
        <ul>
          <li><a href='https://prismic.io'>Prismic</a>: hosted CMS platform</li>
          <li><a href='https://github.com/everydayhero/prismic-utils'>Prismic Utils</a>: internal tool for fetching and parsing Prismic content</li>
        </ul>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(ContentRoute)
