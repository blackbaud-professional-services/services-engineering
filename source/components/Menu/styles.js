export default (props, {
  rhythm,
  treatments
}) => ({
  root: {
    ul: {
      margin: rhythm(-1)
    },

    li: {
      margin: rhythm(1)
    }
  },

  current: {
    ...treatments.head
  }
})
