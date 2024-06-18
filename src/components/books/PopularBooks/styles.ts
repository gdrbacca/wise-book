import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  width: 324,
  padding: '18px 20px 18px',
  background: '$gray700',
  borderRadius: '$md',
  gap: '$6',
})

export const PopularBookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  h1: {
    fontSize: '$md',
    color: '$gray100',
  },
  h2: {
    fontSize: '$md',
    color: '$gray400',
    fontWeight: 400,
  },
})
