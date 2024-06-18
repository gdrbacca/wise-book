import { styled } from '@/styles/stitches.config'

export const MainContainer = styled('main', {
  marginLeft: 'calc(232px + 7.25rem)',
  marginTop: '6rem',
  marginRight: '6rem',
  height: '100%',

  maxWidth: '100%',
  fisplay: 'flex',
  flexDirection: 'column',
})

export const MainHeader = styled('header', {
  display: 'flex',
  alignContent: 'flex-start',
  gap: '$5',
  width: '100%',
  paddingLeft: '$10',
  color: '$gray100',
  fontWeight: '$regular',
  svg: {
    color: '$green100',
  },
})

export const MainContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 324px',
  gap: '$15',
  padding: '$10',
  marginTop: '$10',
})

export const YourBooksAndReviews = styled('div', {
  backgroundColor: 'transparent',
})

export const YourBooksAndReviewsHeader = styled('header', {
  color: '$gray100',
})

export const YourBooksAndReviewsContent = styled('div', {})

export const PopularBooksContainer = styled('div', {
  backgroundColor: 'green',
  maxHeight: 'calc(100vh / 1.6)',
})

export const ListExploreBooks = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  width: '100%',
  ul: {
    listStyleType: 'none',
    overflow: 'hidden',
    background: 'green',
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

export const PopularBooksHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$gray100',

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

export const PopularBooksList = styled('div', {
  marginTop: '$5',

  ul: {
    listStyleType: 'none',
    overflow: 'hidden',

    'li:nth-child(n+2)': {
      marginTop: '$3',
    },
  },
})
