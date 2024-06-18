import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  height: '100%',
})

export const ImageBackground = styled('div', {
  padding: '$5',
  height: '100%',
  img: {
    borderRadius: '$md',
  },
})
export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    color: '$gray100',
    fontSize: '2rem',
    lineHeight: '$tall',
  },

  h2: {
    color: '$gray100',
    fontSize: '$xl',
    fontWeight: '$medium',
  },
})

export const ButtonContainer = styled('div', {
  marginTop: '$10',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    gap: '$4',
    padding: '$6',
    cursor: 'pointer',

    width: 372,
    height: 72,
    borderRadius: '$md',
    border: 'none',
    backgroundColor: '$gray600',
    color: '$white',
    fontSize: '$xl',
    fontWeight: '$medium',

    '&:hover': {
      backgroundColor: '$gray500',
    },

    '&:disabled': {
      backgroundColor: '$gray700',
      color: '$gray400',
      cursor: 'not-allowed',
    },
  },
})
