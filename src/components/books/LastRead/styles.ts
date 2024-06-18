import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  background: '$gray600',
  borderRadius: '$md',
  padding: '$6',
  gap: '$6',
  width: '100%',
  height: 'auto',
  display: 'flex',
  alignItems: 'flex-start',
  overflow: 'hidden',
})

export const LastReadInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '100%',
})

export const LastReadHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  span: {
    color: '$gray300',
  },
})

export const LastReadBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  color: '$gray100',
  lineHeight: '$base',
  h1: {
    fontSize: '$xl',
  },
  h2: {
    color: '$gray400',
    fontWeight: 400,
    fontSize: '$md',
  },
})
