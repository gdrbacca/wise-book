import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  background: '$gray700',
  width: 564,
  borderRadius: '$md',
  padding: '$6 $8 $4',
  fontFamily: '$default',
})

export const DetailedBookMain = styled('div', {
  display: 'flex',
  gap: '$6',
})

export const DetailedBookFooter = styled('footer', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$12',
  marginTop: '$10',
  borderTop: '1px solid $gray600',
  padding: '$6 0 $6',
})

export const BookDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  svg: {
    color: '$green100',
  },
  span: {
    color: '$gray300',
    fontWeight: 400,
  },
})

export const BookDetailedCategories = styled('div', {
  display: 'flex',
  h2: {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: '$bold',
  },
})

export const DetailedBookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '$5',

  h1: {
    fontSize: '$xl',
    color: '$gray100',
  },
  h2: {
    fontSize: '$md',
    color: '$gray300',
    fontWeight: 400,
    marginTop: '$2',
  },
  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})
