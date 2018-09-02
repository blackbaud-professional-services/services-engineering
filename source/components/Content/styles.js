export default ({
  maxWidth
}, {
  colors,
  rhythm,
  treatments
}) => ({
  root: {
    maxWidth: maxWidth && rhythm(maxWidth),

    h1: { padding: `${rhythm(2)} 0 ${rhythm(1)}` },
    h2: { ...treatments.body, padding: `${rhythm(2)} 0 ${rhythm(1)}` },
    h3: { ...treatments.body, padding: `${rhythm(2)} 0 ${rhythm(1)}` },
    h4: { ...treatments.body },
    h5: { ...treatments.body },
    h6: { ...treatments.body },

    a: {
      borderBottom: `2px solid ${colors.dark}`
    },

    '.highlight': {
      display: 'inline-block',
      margin: rhythm(-0.125),
      padding: rhythm(0.125),
      backgroundColor: colors.highlight
    },

    '> :first-child': {
      paddingTop: 0
    }
  }
})
