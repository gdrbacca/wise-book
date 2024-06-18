import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  padding: '1rem 1.25rem 1rem',
  width: 360,
  gap: '$6',
  background: '$gray700',
  borderRadius: '$md',
  marginTop: '$5',
  '&:hover': {
    background: '$gray600',
    cursor: 'pointer',
  },
})

export const ExploreBooksContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h1: {
    fontSize: '$lg',
    color: '$gray100',
  },
  h2: {
    fontSize: '$md',
    color: '$gray400',
    fontWeight: 400,
  },
})
