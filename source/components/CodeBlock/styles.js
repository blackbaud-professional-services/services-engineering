export default ({
  type
}, {
  colors,
  rhythm,
  scale,
  treatments
}) => ({
  root: {
    position: 'relative',
    marginTop: rhythm(type ? 2.5 : 2),
    marginBottom: rhythm(2),
    padding: `${rhythm(0.5)} ${rhythm(1)}`,
    backgroundColor: colors.lightGrey,
    fontSize: scale(-1),
    lineHeight: 1.75,
    ...treatments.code,
    '> pre': {
      whiteSpace: 'pre',
      overflow: 'auto'
    }
  },

  type: {
    position: 'absolute',
    bottom: '100%',
    right: 0,
    padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
    backgroundColor: colors.lightGrey,
    fontSize: scale(-2)
  }
})
