import { styled } from '@stitches/react'

export const MainContainerExplorar = styled('main', {
  marginLeft: 'calc(232px + 6.25rem)',
  marginTop: '6rem',
  marginRight: '2rem',
  height: '100%',

  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const HeaderExplorar = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  div: {
    display: 'flex',
    gap: '$4',
    width: '100%',
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
  },

  form: {
    display: 'flex',
    width: 433,
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

export const ListExploreBooks = styled('div', {
  marginTop: '3rem',
  display: 'flex',
  width: '100%',
  padding: '0 $2 $2',
  ul: {
    listStyleType: 'none',
    overflow: 'hidden',
    li: {
      marginRight: '$5',
      float: 'left',
    },
    'li:nth-child(4n)': {
      marginRight: 0,
    },
    'li:nth-child(4n + 1)': {
      clear: 'left',
    },
  },
})

export const ButtonExploreBook = styled('span', {
  all: 'unset',
})
