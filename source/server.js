import { createServer } from 'boiler-room-runner'
import { configureStore } from './store'
import routes from './routes'
import renderDocument from './lib/renderDocument/'

const store = configureStore()
const basepath = process.env.BASE_PATH

export default ({ assets }) => {
  const app = createServer({
    basepath,
    routes,
    store,
    renderDocument,
    assets
  })

  app.staticRoutes = [
    '/',
    '/build',
    '/components',
    '/content',
    '/deploy',
    '/integration',
    '/rails',
    '/routing',
    '/state',
    '/styles',
    '/tests'
  ]

  return app
}

export { default as renderDocument } from './lib/renderDocument/'
