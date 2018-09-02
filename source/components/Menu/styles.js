export default (props, {
  colors,
  rhythm,
  scale
}) => ({
  root: {
    borderBottom: `2px solid ${colors.lightGrey}`
  },

  items: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: rhythm(-0.5),
    marginRight: rhythm(-0.5)
  },

  item: {
    display: 'block',
    padding: rhythm(0.5),
    fontSize: scale(-0.5),
    borderBottom: '2px solid transparent'
  },

  container: {
    paddingRight: rhythm(1),
    paddingLeft: rhythm(1),
    margin: '0 auto',
    maxWidth: rhythm(40)
  },

  current: {
    borderBottom: `2px solid ${colors.dark}`
  }
})
