import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '$md',
  padding: '$5',
  gap: '$5',
  fontFamily: '$default',

  variants: {
    bgcolor: {
      darker: {
        background: '$gray700',
      },
      lighter: {
        background: '$gray600',
      },
    },
  },
})

export const RatingBookHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const RatingBookProfile = styled('div', {
  display: 'flex',
  gap: '$4',

  img: {
    border: '2px solid transparent',
    borderRadius: '$full',
    background: '$gradient-image',
    backgroundOrigin: 'border-box',
  },

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
