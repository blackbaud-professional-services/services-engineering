import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'

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

const Deploy = () => {
  return (
    <div>
      <Helmet title='Build | Services Engineering' />
      <SectionTitle size={5}>Build</SectionTitle>
      <Content>
        <h3>Targets</h3>
        <p>Boiler Room Builder has a deploy script that works with 3 different targets.</p>
        <ul>
          <li><span className='highlight'>gh-pages</span>: deploys a site to Github Pages</li>
          <li><span className='highlight'>s3</span>: AWS S3</li>
          <li><span className='highlight'>lamdba</span>: AWS Lambda</li>
        </ul>
        <h3>Github Pages</h3>
        <p>We often use Github pages for staging. We would first run a staging build of our app, and then use a BRB script to deploy that staging build to Github Pages.</p>
        <p>It basically works by committing your statically built site to a <span className='highlight'>gh-pages</span> branch in your repository, which Github then hosts for us at a url like <span className='highlight'>https://everydayhero.github.io/repo-name</span></p>
        <p>You might remember we spoke about our <span className='highlight'>BASE_PATH</span> during the build step, and this is the example of when we would want to set that, to ensure our app works correctly being served from a subdirectory.</p>
        <CodeBlock type='shell'>brb deploy --target=gh-pages</CodeBlock>
        <h3>S3</h3>
        <p>For hosting our static sites in production, we use S3. We would first run a production build of our app, and then use a BRB script to deploys the files to S3.</p>
        <p>Deploying to S3 requires AWS credentials information to be available as environment variables. This can be ahieved in many ways, with AWS Vault being the most common.</p>
        <CodeBlock type='shell'>brb deploy --target=s3 --bucket=bucket-name --prefix=domain</CodeBlock>
        <h5>blackbaud-sites.com</h5>
        <p>For small sites not requiring a custom domain, we can deploy these into a folder within <span className='highlight'>blackbaud-sites</span> bucket. If the folder name matches a subdomain of blackbaud-sites.com, the site will automatically work with SSL enabled e.g. my-site.blackbaud-sites.com.</p>
        <h5>Custom Domains</h5>
        <p>For custom domains, we would deploy to the <span className='highlight'>blackbaud-professional-services-production</span> bucket, in a folder that shares a name with the domain of the site.</p>
        <p>The next steps are requesting an SSL certificate via Certificate Manager for the domain, and then configuring a Cloudfront distribution which points to our folder.</p>
        <p>We can then pass on the details to the client to do the necessary configuration i.e. create an alias for their domain pointing to the Cloudfront url.</p>
        <h3>Lambda</h3>
        <p>For sites that require dynamic routes, we can deploy them to Lambda. This method creates a Lambda, uploads it to S3, and creates a Cloudformation script that configures API Gateway and sets up our lambda.</p>
        <p>Any requests to the site will be forwarded to the Lambda, which is running our app, and will return dynamically generated HTML, as opposed to the statically generated HTML we were using in the earlier methods.</p>
        <p>Configuring a domain name for these sites requires similar steps to above i.e. an SSL certificate and Cloudfront distribution.</p>
        <CodeBlock type='shell'>brb deploy --target=lambda --bucket=bucket-name --fn-name=myAppNameProd</CodeBlock>
        <h3>Automating via Buildkite</h3>
        <p>Our app is setup to build and deploy from the command line, but usually, we want to automate this using a CI tool, in our case Buildkite. We do this for a couple of reasons:</p>
        <ul>
          <li>Deploying manually is prone to mistakes</li>
          <li>Eliminates the need for us to have active AWS credentials on our machines</li>
        </ul>
        <p>When Boilermaker generated our app, it would have included the necessary files that will be used by Buildkite to make up our pipeline.</p>
        <ul>
          <li><span className='highlight'>.buildkite/pipeline.yml</span>: these are the steps of our pipeline</li>
          <li><span className='highlight'>bin/test and bin/deploy</span>: these are the actual scripts that the pipeline will execute</li>
          <li><span className='highlight'>docker-compose.yml</span>: details of the docker container our app will run in</li>
        </ul>
        <p>To create the pipeline in Buildkite, we need to do a few steps.</p>
        <ul>
          <li>Login using the credentials in 1Password</li>
          <li>Create a new pipeline specifying the name and Github repo of our project</li>
          <li>Add the necessary environment variables, which include the <span className='highlight'>APP_NAME</span> and the necessary AWS credentials.</li>
          <li>Tell Buildkite to look at our pipeline config in our codebase, by adding <span className='highlight'>buildkite-agent pipeline upload</span></li>
          <li>Configure our Github webhooks following the necessary instructions</li>
        </ul>
        <p>And that's it, when our repo is updated, the pipeline will run the tests, and deploy to staging and production. Although Boilermaker gives us a good baseline, we can configure our pipeline as needed.</p>
        <h3>Prismic Webhooks</h3>
        <p>The last thing we may wish to do is configure Prismic to trigger a Buildkite build to re-deploy the site when changes are made in the CMS.</p>
        <p>This uses by adding a Prismic webhook that will notify <a href='https://github.com/everydayhero/soundwave'>Soundwave</a>, which is an small internal app that listens to webhooks and triggers builds.</p>
        <p>Details of how to configure the webhook can be found in the Soundwave readme.</p>
      </Content>
    </div>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Deploy)
