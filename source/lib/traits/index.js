export const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
  `${basis * value}${unit}`
)

export const scale = (exponent = 0, scale = 1.2) => (
  `${Math.pow(scale, exponent)}rem`
)

export const transitions = {
  easeOut: 'ease-out .25s'
}

export const fonts = {
  head: 'Montserrat, Arial, sans-serif',
  body: 'Montserrat, Arial, sans-serif'
}

export const treatments = {
  head: {
    fontFamily: fonts.head,
    fontWeight: 900
  },
  body: {
    fontFamily: fonts.body
  }
}

export const colors = {
  primary: '#8BBF47',
  light: '#FFF',
  dark: '#444',
  shade: '#F4F4F4',
  highlight: '#E7F2D9'
}
