export default (props, {
  colors,
  rhythm,
  treatments
}) => ({
  root: {
    paddingTop: rhythm(2),
    color: colors.dark,
    ...treatments.body
  },

  intro: {
    padding: `${rhythm(4)} ${rhythm(1)}`,
    margin: '0 auto',
    maxWidth: rhythm(40)
  },

  content: {
    padding: `${rhythm(2)} ${rhythm(1)}`,
    margin: '0 auto',
    maxWidth: rhythm(40)
  },

  contentInner: {
    maxWidth: rhythm(26)
  }
})
