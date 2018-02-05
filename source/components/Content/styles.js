export default (props, {
  colors,
  rhythm,
  transitions
}) => ({
  root: {
    h1: { padding: `${rhythm(2)} 0 ${rhythm(1)}` },
    h2: { padding: `${rhythm(2)} 0 ${rhythm(1)}` },
    h3: { padding: `${rhythm(2)} 0 ${rhythm(1)}` },

    a: {
      opacity: 0.75,
      borderBottom: `2px solid ${colors.primary}`,
      transition: transitions.easeOut,

      ':hover': {
        opacity: 1
      }
    },

    '.highlight': {
      backgroundColor: colors.highlight
    }
  }
})
