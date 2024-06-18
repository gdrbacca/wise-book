import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 'calc(232px + 6.25rem)',
  marginTop: '6rem',
  marginRight: '2rem',
  height: '100%',
})

export const PerfilHeader = styled('header', {
  display: 'flex',
  gap: '$4',
  width: 'auto',
  color: '$gray100',
  fontWeight: '$regular',
  alignContent: 'flex-start',
  marginLeft: '2rem',
  h1: {
    fontSize: '$2xl',
    lineHeight: '$short',
  },

  svg: {
    color: '$green100',
  },
})

export const PerfilContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: '$gray100',
  maxWidth: '70%',

  marginTop: '$10',

  form: {
    display: 'flex',
    width: '100%',
    position: 'relative',

    svg: {
      position: 'absolute',
      color: '$gray500',
      top: 0,
      right: '$6',
      height: '100%',
    },

    'input[type="text"]': {
      all: 'unset',
      color: '$gray100',
      borderRadius: '$sm',
      border: '1px solid $gray500',
      lineHeight: 0,
      padding: '$4',
      width: 'inherit',
      background: 'transparent',

      '&:hover': {
        border: '1px solid $gray400',
      },
      '&:focus': {
        border: '1px solid $gray400',
      },
      '&::placeholder': {
        color: '$gray400',
      },
    },
  },
})

export const PerfilBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  marginTop: '$8',
})

export const PerfilBookSection = styled('div', {
  span: {
    color: '$gray400',
  },
  marginBottom: '$6',
})
