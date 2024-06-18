import { styled } from '@/styles/stitches.config'

export const PerfilInfo = styled('div', {
  position: 'fixed',

  width: 400,
  maxWidth: 400,
  height: 'auto',
  right: '2rem',
  top: '10.5rem',
  padding: '0 $12',
  borderLeft: '1px solid $gray700',
})

export const PerfilInfoHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  span: {
    height: 4,
    width: 32,
    marginTop: '$12',
    borderRadius: '$full',
    background: 'linear-gradient(to right, #7FD1CC, #9694F5)',
  },

  img: {
    border: '2px solid transparent',
    borderRadius: '$full',
    background: '$gradient-image',
    backgroundOrigin: 'border-box',
  },

  h1: {
    marginTop: '$6',
    color: '$white',
    fontSize: '$2xl',
    textAlign: 'center',
  },
  h2: {
    color: '$gray400',
    fontSize: '$xl',
    fontWeight: '$regular',
    lineHeight: '$tall',
  },
})

export const TablePerfil = styled('table', {
  width: '80%',
  marginTop: '$12',
  borderCollapse: 'separate',
  borderSpacing: '0 0.5rem',
  marginLeft: '$6',
  tr: {
    'td:first-child': {
      lineHeight: 0,
      textAlign: 'left',
      padding: '0 $1 0',
      width: '25%',
      svg: {
        color: '$green100',
      },
    },
    'td:nth-child(2)': {
      'tr:first-child': {
        span: {
          lineHeight: 0,
          padding: 0,
          verticalAlign: 'sub',
        },
      },
      'tr:last-child': {},
    },
  },

  span: {
    color: '$white',
    fontWeight: 'bold',
    fontSize: '$lg',
  },

  p: {
    color: '$gray400',
  },
})
