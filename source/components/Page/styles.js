export default (props, {
  colors,
  rhythm,
  treatments
}) => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    color: colors.dark,
    ...treatments.body
  },

  sidebar: {
    flex: `0 0 ${rhythm(10)}`,
    padding: `${rhythm(2)} ${rhythm(1)}`,
    backgroundColor: colors.shade
  },

  content: {
    flex: 1,
    padding: rhythm(2),
    maxWidth: rhythm(40)
  }
})
