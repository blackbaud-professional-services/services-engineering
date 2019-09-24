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

const Rails = () => {
  return (
    <div>
      <Helmet title='Ruby on Rails | Services Engineering' />
      <Content>
        <h3>Ruby on Rails</h3>
        <p>Whilst we mostly build isomorphic Javascript applications, we also have a few Ruby on Rails apps which we mantain.</p>

        <h3>Deploying a Rails app to AWS</h3>

        <h4>Resources:</h4>

        <ul>
          <li><a href='https://gorails.com/deploy/ubuntu/18.04'>https://gorails.com/deploy/ubuntu/18.04</a></li>
          <li><a href='https://coderwall.com/p/ttrhow/deploying-rails-app-using-nginx-puma-and-capistrano-3'>https://coderwall.com/p/ttrhow/deploying-rails-app-using-nginx-puma-and-capistrano-3</a></li>
          <li><a href='https://medium.com/@KerrySheldon/ec2-exercise-1-6-deploy-a-rails-app-to-an-ec2-instance-using-capistrano-3485238e4a4a'>https://medium.com/@KerrySheldon/ec2-exercise-1-6-deploy-a-rails-app-to-an-ec2-instance-using-capistrano-3485238e4a4a</a></li>
        </ul>

        <h4>AWS:</h4>

        <ul>
          <li>Create RDS PostgreSQL DB</li>
          <li>
            Create EC2 Instance - Ubuntu
            <ul>
              <li>Create or assign relevant security groups</li>
              <li>Create EC2 key pair</li>
            </ul>
          </li>
          <li>Create and associate EC2 Elastic IP</li>
          <li>Create EC2 load balancer</li>
          <li>Setup EC2 Target groups, </li>
          <li>Create ACM certificate for intended domain in region if doesn't exist, attach to load balancer</li>
          <li>Create route 53 DNS record</li>
        </ul>

        <h3>Instance setup</h3>

        <p>First, install any relevent system dependencies:</p>

        <CodeBlock type='ruby'>{snippets.serverDeps}</CodeBlock>

        <ul>
          <li><a href='https://github.com/nvm-sh/nvm#install--update-script'>Install NVM/Node</a></li>
          <li>Install yarn <span className='highlight'>npm install -g yarn</span></li>
          <li><a href='https://medium.com/@sourav.moitr/installing-rbenv-and-ruby-on-ubuntu-16-04-cc9471d2674e'>Install rbenv/ruby</a></li>
          <li>
            Install bundler:

            <CodeBlock type='ruby'>{snippets.gemInstall}</CodeBlock>
          </li>

          <li>Create DB <span className='highlight'>RAILS_ENV=production rails db:create</span></li>
          <li>Setup NGINX</li>
          <li>Set hostname <span className='highlight'>sudo nano /etc/hostname</span></li>
          <li>Add any useful aliases to the server</li>
          <li>Add any environment-specific config</li>
          <li>
            Generate an SSH key pair, then:
            <ul>
              <li>Add generated private key to Travis</li>
              <li>Add generated public key to Github repo</li>
              <li>Add public key to <span className='highlight'>authorized_keys</span> on the server</li>
            </ul>
          </li>
        </ul>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Rails)
