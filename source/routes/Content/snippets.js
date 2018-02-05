export const fetchDocument = `import { fetchDocument } from 'prismic-utils'

const fetchHomeContent = fetchDocument({
  repository: 'prismic-repo-id',
  type: 'home'
})`

export const reduxHelpers = `import { createDocumentAction, createDocumentReducer } from 'prismic-utils'

const NAMESPACE = 'app/home'

export const fetchHomeContent = () => (
  createDocumentAction(NAMESPACE, {
    repository: 'prismic-repo-id',
    type: 'home'
  })
)

export default createDocumentReducer(NAMESPACE)`

export const prismicExample = `{
  'hero-title': {
    type: 'Text'
  },
  'hero-image': {
    type: 'Image'
  },
  'intro-title': {
    type: 'Text'
  },
  'intro-copy': {
    type: 'StructuredText'
  }
}`

export const storeExample = `{
  hero: {
    title: 'Our Hero Title',
    image: {
      url: 'https://path.to.image'
    }
  },
  intro: {
    title: 'Our Intro Title',
    copy: [
      { type: 'p', content: 'Lorem ipsum' },
      { type: 'p', content: 'Lorem ipsum' }
    ]
  }
}`
