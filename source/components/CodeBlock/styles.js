export default ({
  type
}, {
  colors,
  rhythm,
  scale
}) => ({
  root: {
    position: 'relative',
    marginTop: type && rhythm(0.5),
    marginBottom: rhythm(1),
    padding: `${rhythm(0.5)} ${rhythm(1)}`,
    backgroundColor: colors.shade,
    fontSize: scale(-1),
    lineHeight: 1.75
  },

  type: {
    position: 'absolute',
    bottom: '100%',
    right: 0,
    padding: `${rhythm(0.25)} ${rhythm(0.5)}`,
    backgroundColor: colors.shade,
    fontSize: scale(-2)
  }
})
