import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gray700',
  borderRadius: '$md',

  width: '100%',
  padding: '$5',
  gap: '$6',
})

export const ProfileBookHeader = styled('header', {
  display: 'flex',
  gap: '$6',
})

export const ProfileBookContent = styled('div', {
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

  p: {
    color: '$gray300',
    fontWeight: 400,
  },
})
