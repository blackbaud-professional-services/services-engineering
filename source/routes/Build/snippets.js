export const buildJson = `{
  "scripts": {
    "build": "brb build --config='./webpack.shared.config' --base-path=$BASE_PATH",
    "build:staging": "BASE_PATH='/repo-name/' yarn build",
    "build:prod": "NODE_ENV='production' yarn build"
  }
}`

export const staticRoutes = `app.staticRoutes = [
  '/',
  '/about',
  '/faqs'
]`
