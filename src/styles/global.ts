import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
  },

  'body, input, button, textarea': {
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})
