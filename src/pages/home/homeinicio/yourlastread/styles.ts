import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  background: 'transparent',
})

export const YourLastReadHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$gray100',
  marginBottom: '$4',
  a: {
    all: 'unset',
    cursor: 'pointer',
    color: '$purple100',
    fontWeight: 'bold',
    svg: {
      top: '.294em',
      position: 'relative',
    },
  },
})
